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
      className="flex flex-col items-center gap-4 p-5"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="space-y-3 text-center"
      >
        <div className=" flex flex-row items-center justify-center gap-1 font-mono text-lg text-blue-500">
          <span>04.</span>
          <span> What&apos;s Next?</span>
        </div>

        <h1 className="text-inter-700 text-2xl text-slate-300">
          Let&apos;s Get In Touch!
        </h1>
        <p className="text-inter-500 text-sm text-slate-300">
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
        className="flex w-full flex-col gap-5"
      >
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          className="placeholder:text-inter-500 rounded-md p-2 text-sm text-slate-950 placeholder:text-sm focus:outline-none focus:outline-blue-500"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="placeholder:text-inter-500 rounded-md p-2 text-sm text-slate-950 placeholder:text-sm focus:outline-none focus:outline-blue-500"
        />
        <textarea
          required
          type="text"
          name="message"
          placeholder="Message"
          className="placeholder:text-inter-500 h-24 rounded-md p-2 text-sm text-slate-950 placeholder:text-sm focus:outline-none focus:outline-blue-500"
        />
        <button className="text-inter-500 mt-4 w-fit self-center rounded-md bg-blue-500 px-3 py-2 text-sm">
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
}
