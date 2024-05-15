import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function About() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start({ opacity: 1, y: 0 });
      titleControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView, animationControls, titleControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={animationControls}
      className="space-y-4 border-2 border-yellow-500 p-5"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="font-mono text-lg text-blue-500">01.</span>
        <h1 className="text-inter-700 text-2xl text-slate-300">About</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="text-inter-500 space-y-3 text-sm leading-6 text-slate-300"
      >
        <p>
          Hello again! I&apos;m Luca, a Junior Full Stack Developer based in
          Messina, Sicily.
          <br />
          My journey began at 14 years old, when I&apos;ve decide to start
          studying IT and Telecommunications.
          <br /> I graduated in 2021 with a grade of 100/100ths.
        </p>

        <p>
          After that, I took part in the Full Stack Development course offered
          by{" "}
          <a href="https://www.start2impact.it" className="text-blue-500">
            start2impact
          </a>
          , from wich I obtained a{" "}
          <a
            href="src/assets/pdf/master.pdf"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            master&apos;s degree
          </a>
          .
          <br />
          This experience contributed significantly to increasing my educational
          background, allowing me to learn the fundamental technologies in web
          development.
        </p>

        <p>
          Today I&apos;m ready and excited to put my skills into practice: my
          goal is to continue to grow professionally, facing new challenges and
          seizing every learning opportunity in my journey as a web developer.
        </p>
      </motion.div>
    </motion.div>
  );
}
