import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className="flex flex-col items-start gap-4 p-5">
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="font-mono text-lg text-slate-300"
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
        <h1 className="text-inter-700 text-4xl text-blue-500">
          Luca Cucinotta
        </h1>
        <h2 className="text-inter-700 text-3xl text-slate-400">
          A Junior Full Stack Developer
        </h2>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
        className="text-inter-500 space-y-3 text-lg text-slate-300"
      >
        <p>
          Explore my personal portfolio website and discover more about{" "}
          <a href="#about" className="text-blue-500">
            me
          </a>{" "}
          and my{" "}
          <a href="#projects" className="text-blue-500">
            projects
          </a>
          .
        </p>
        <p>Click below and enjoy your exploration!</p>
      </motion.div>
      <a href="#about">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 w-fit rounded-md border-2 border-blue-500 p-4 font-mono text-blue-500"
        >
          Check my portfolio!
        </motion.div>
      </a>
    </motion.div>
  );
}
