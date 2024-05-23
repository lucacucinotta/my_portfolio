import Tool from "../components/Tool";
import { FiGithub } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function ProjectCard({ data }) {
  const { ref, inView } = useInView({ delay: 0.2, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [inView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={animation}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col gap-6 rounded-md bg-slate-900 p-5 xl:p-6"
      onMouseEnter={() =>
        animation.start({ y: -5 }, { duration: 0.3, ease: "easeOut" })
      }
      onMouseLeave={() =>
        animation.start({ y: 0 }, { duration: 0.3, ease: "easeOut" })
      }
    >
      <div className="flex flex-col gap-1">
        <span className="font-mono text-sm text-blue-500 xl:text-base">{`${data.intro} Project`}</span>
        <a
          href={data.links.website ? data.links.website : data.links.gitHub}
          target="_blank"
          rel="nooper noreferrer"
          className="text-inter-700 w-fit cursor-pointer text-slate-300 duration-300 hover:text-blue-500 xl:text-lg"
        >
          {data.projectName}
        </a>
      </div>

      <p className="text-inter-500 text-sm leading-6 text-slate-300 xl:text-base">
        {data.description}
      </p>

      <div className="flex flex-row flex-wrap gap-4">
        {data.tools.map((tool, index) => (
          <Tool key={index} name={tool.toolName} />
        ))}
      </div>

      <div className="mt-auto flex flex-row items-center gap-4">
        <a href={data.links.gitHub} target="_blank" rel="nooper noreferrer">
          <FiGithub className="size-5 text-slate-300 duration-300 hover:scale-110 hover:text-blue-500" />
        </a>
        {data.links.website && (
          <a href={data.links.website} target="_blank" rel="nooper noreferrer">
            <FiArrowUpRight className="size-6 text-slate-300 duration-300 hover:scale-110 hover:text-blue-500" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};
