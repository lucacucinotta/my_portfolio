import ProjectCard from "../../components/ProjectCard";
import data from "./utils.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });
  const animationControls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
      titleControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, animationControls, titleControls]);

  return (
    <div ref={ref} className="midSection">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="sectionNumber">02.</span>
        <h1 className="sectionTitle">Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="flex flex-col gap-4 md:grid md:grid-cols-2"
      >
        {data.projects.map((project, index) => (
          <ProjectCard key={index} data={project} delay={index * 0.2} />
        ))}
      </motion.div>
    </div>
  );
}
