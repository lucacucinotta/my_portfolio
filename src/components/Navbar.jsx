import { Squash as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { showBurgerMenu, hideBurgerMenu } from "../states/burgerMenu";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../assets/img/logo.jpg";
import data from "./utils/pageNavigation.json";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isShown } = useSelector((state) => state.burgerMenuState);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous < latest) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinkVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      id="navbar"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 z-30 flex h-[85px] flex-row items-center justify-between px-5 xl:px-10 ${
        !isShown ? "bg-slate-950 bg-opacity-85 backdrop-blur" : null
      }`}
    >
      <motion.img
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        src={Logo}
        className="size-10 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="flex flex-row items-center gap-8 max-md:hidden">
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
            <div className="flex flex-row gap-1 text-sm">
              <span className="font-mono text-blue-500">{`0${index + 1}.`}</span>
              <span className="text-inter-500 link text-slate-300 ">
                {section.sectionName}
              </span>
            </div>
          </motion.a>
        ))}
        <ResumeButton />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-blue-500 md:hidden"
      >
        <Hamburger
          rounded
          size={30}
          duration={0.5}
          distance="md"
          toggled={isShown}
          toggle={() => {
            if (isShown) {
              dispatch(hideBurgerMenu());
            } else {
              dispatch(showBurgerMenu());
            }
          }}
        />
      </motion.div>
    </motion.nav>
  );
}
