import { Squash as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { showBurgerMenu, hideBurgerMenu } from "../states/burgerMenu";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

  return (
    <motion.nav
      id="navbar"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky top-0 z-20 flex flex-row items-center justify-end p-3  ${
        !isShown && "bg-slate-950 bg-opacity-80 backdrop-blur"
      }`}
    >
      <Hamburger
        rounded
        color="rgb(59, 130, 246)"
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
    </motion.nav>
  );
}
