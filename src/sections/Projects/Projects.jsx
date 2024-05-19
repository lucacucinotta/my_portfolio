import ProjectCard from "../../components/ProjectCard";
import data from "./utils.json";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Projects() {
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
      className="space-y-4 p-5 min-[500px]:p-10 md:px-20 lg:px-[120px] xl:px-40 2xl:px-[200px]"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="sectionNumber">02.</span>
        <h1 className="sectionTitle">Projects</h1>
      </motion.div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </motion.div>
  );
}
