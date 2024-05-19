import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className="flex flex-col items-start gap-4 p-5 min-[500px]:px-10 md:px-20 lg:px-[120px] xl:px-40 2xl:px-[200px]">
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="font-mono text-lg text-slate-300 xl:text-xl"
      >
        Hi! My name is
      </motion.span>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="space-y-1"
      >
        <h1 className="text-inter-700 text-4xl text-blue-500 min-[500px]:text-5xl md:text-6xl xl:text-7xl">
          Luca Cucinotta
        </h1>
        <h2 className="text-inter-700 text-3xl text-slate-400 min-[500px]:text-4xl md:text-5xl xl:text-6xl">
          A Junior Full Stack Developer
        </h2>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
        className="text-inter-500 min-[500px]:w-max-[300px] space-y-3 text-lg text-slate-300 xl:text-xl"
      >
        <p>
          Explore my personal portfolio website and discover more about{" "}
          <a href="#about" className="link">
            me
          </a>{" "}
          and my{" "}
          <a href="#projects" className="link">
            projects
          </a>
          .
        </p>
        <p>Click below and enjoy your exploration!</p>
      </motion.div>
      <motion.a
        href="#about"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
        whileTap={{ scale: 0.9 }}
        className="button mt-4 p-4 font-mono xl:text-lg"
      >
        Check my portfolio!
      </motion.a>
    </motion.div>
  );
}
