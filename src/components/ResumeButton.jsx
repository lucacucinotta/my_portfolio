import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Ita from "../assets/img/ita.svg";
import Eng from "../assets/img/eng.svg";

export default function ResumeButton() {
  const ref = useRef();
  const [showResumeLanguage, setShowResumeLanguage] = useState(false);
  useClickAway(ref, () => {
    if (setShowResumeLanguage) {
      setShowResumeLanguage(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
      className={`button w-[100px] py-3 text-center text-blue-500 min-[500px]:w-[120px] md:w-[80px] md:py-2`}
      onClick={() => {
        setShowResumeLanguage((prevState) => !prevState);
      }}
    >
      <AnimatePresence mode="wait">
        {!showResumeLanguage && (
          <motion.span
            key="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Resume
          </motion.span>
        )}
        {showResumeLanguage && (
          <motion.div
            key="languages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className={`flex flex-row justify-between gap-3 px-3`}
          >
            <a
              href="src/assets/pdf/luca_cucinotta_resume_ita.pdf"
              target="_blank"
              rel="nooper noreferrer"
              className="duration-200 hover:scale-125"
            >
              <img src={Ita} className="size-6" />
            </a>
            <a
              href="src/assets/pdf/luca_cucinotta_resume_eng.pdf"
              target="_blank"
              rel="nooper noreferrer"
              className="duration-200 hover:scale-125"
            >
              <img src={Eng} className="size-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
