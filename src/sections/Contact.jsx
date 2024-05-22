import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });
  const animationControls = useAnimation();

  const [email, setEmail] = useState("");
  const [isErrorMail, setIsErrorMail] = useState(false);

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, animationControls]);

  return (
    <div ref={ref} className="extSection items-center">
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
        <p className="text-inter-500 text-sm text-slate-300 md:text-base xl:text-lg">
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
              ? setIsErrorMail(true)
              : setIsErrorMail(false);
          }}
          placeholder="Email"
          className={`formField ${
            isErrorMail &&
            email.length > 0 &&
            "bg-red-300 text-red-500 focus:bg-red-300"
          }`}
        />
        <textarea
          required
          type="text"
          name="message"
          placeholder="Message"
          className="formField h-24"
        />
        <button
          className="text-inter-500 button mt-4 self-center px-3 py-2 text-sm xl:text-base"
          onClick={(e) => {
            isErrorMail && e.preventDefault();
          }}
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
