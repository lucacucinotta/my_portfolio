import { toolArray } from "./utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });
  const animationControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
      titleControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, animationControls, titleControls]);

  return (
    <div ref={ref} className="midSection w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="sectionNumber">03.</span>
        <h1 className="sectionTitle"> My Toolkit</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="grid grid-cols-3 gap-10 p-5 lg:grid-cols-6"
      >
        {toolArray.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center"
          >
            <tool.icon className="size-10 text-slate-300 md:size-12 xl:size-14" />
            <span className="text-center font-mono text-sm text-slate-300">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
