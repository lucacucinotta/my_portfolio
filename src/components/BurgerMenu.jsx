import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { hideBurgerMenu } from "../states/burgerMenu";
import { useClickAway } from "react-use";
import { useRef } from "react";
import data from "./utils/pageNavigation.json";

export default function BurgerMenu() {
  const { isShown } = useSelector((state) => state.burgerMenuState);
  const dispatch = useDispatch();

  const ref = useRef();
  useClickAway(ref, (e) => {
    const navbarElement = document.querySelector("#navbar");
    if (isShown && !navbarElement.contains(e.target)) {
      dispatch(hideBurgerMenu());
    }
  });

  return (
    <div ref={ref} className="flex justify-end md:hidden">
      <AnimatePresence>
        {isShown && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: "0",
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed z-10 flex h-full w-3/4 flex-col items-center justify-center gap-10 bg-slate-900 pt-10"
          >
            {data.sections.map((section, index) => (
              <a href={section.href} key={index}>
                <div
                  className="flex flex-col text-center min-[500px]:text-lg"
                  onClick={() => dispatch(hideBurgerMenu())}
                >
                  <span className="font-mono text-blue-500">{`0${index + 1}`}</span>
                  <span className="text-inter-500 text-slate-300">
                    {section.sectionName}
                  </span>
                </div>
              </a>
            ))}
            <motion.a
              href="src/assets/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button text-inter-500 px-10 py-3"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
