import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { hideBurgerMenu } from "../states/burgerMenu";
import { useClickAway } from "react-use";
import { useRef } from "react";
import data from "./utils/pageNavigation.json";
import ResumeButton from "./ResumeButton";

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

  const navLinkVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

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
            className="fixed z-10 flex min-h-full w-3/4 flex-col items-center justify-center gap-10 bg-slate-900 pt-10"
          >
            {data.sections.map((section, index) => (
              <motion.a
                initial={navLinkVariants.hidden}
                animate={navLinkVariants.visible}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                href={section.href}
                key={index}
              >
                <div
                  className="flex flex-col text-center min-[500px]:text-lg"
                  onClick={() => dispatch(hideBurgerMenu())}
                >
                  <span className="font-mono text-blue-500">{`0${index + 1}`}</span>
                  <span className="text-inter-500 text-slate-300">
                    {section.sectionName}
                  </span>
                </div>
              </motion.a>
            ))}
            <ResumeButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
