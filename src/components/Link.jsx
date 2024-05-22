import { linkArray } from "./utils/myLink";
import { motion } from "framer-motion";

export default function Link() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed bottom-0 left-5 flex flex-col items-center gap-7 max-md:hidden xl:px-5">
      {[...linkArray].reverse().map((link, index) => (
        <motion.a
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: (linkArray.length - index) * 0.2,
          }}
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon size={20} className="linkIcon" />
        </motion.a>
      ))}
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-24 border-l-2 border-slate-300"
      ></motion.span>
    </div>
  );
}
