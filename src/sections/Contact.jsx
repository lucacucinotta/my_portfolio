import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animationControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={animationControls}
      className="flex flex-col items-center gap-4 p-5 min-[500px]:p-10 md:px-20 lg:px-[120px] xl:px-40 2xl:px-[200px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="space-y-3 text-center"
      >
        <div className="flex justify-center gap-1 font-mono text-lg text-blue-500 xl:text-xl">
          <span>04.</span>
          <span> What&apos;s Next?</span>
        </div>

        <h1 className="sectionTitle">Let&apos;s Get In Touch!</h1>
        <p className="text-inter-500 text-sm text-slate-300 xl:text-base">
          If you want to work with me or have any question feel free to write
          me.
        </p>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        action="https://formspree.io/f/xkndeozg"
        method="POST"
        className="flex w-full flex-col gap-5 min-[500px]:max-w-[420px] md:max-w-[500px] 2xl:max-w-[600px]"
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="formField"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="formField"
        />
        <textarea
          required
          type="text"
          name="message"
          placeholder="Message"
          className="formField h-24"
        />
        <button className="text-inter-500 button mt-4 self-center px-3 py-2 text-sm xl:text-base">
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
}
