import { toolArray } from "./utils";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Skills() {
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
      className="space-y-4 border-2 border-red-900 p-5"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="font-mono text-lg text-blue-500">03.</span>
        <h1 className="text-inter-700 text-2xl text-slate-300"> My Toolkit</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="grid grid-cols-3 gap-10 p-5"
      >
        {toolArray.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <tool.icon size={40} className="fill-slate-300" />
            <span className="text-center font-mono text-sm text-slate-300">
              {tool.name}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
