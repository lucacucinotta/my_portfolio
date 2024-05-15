import Tool from "../components/Tool";
import { FiGithub } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function ProjectCard({ data }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={animation}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      className="cursor-pointer space-y-5 rounded-md bg-slate-900 p-5"
    >
      <div>
        <span className="font-mono text-sm text-blue-500">{`${data.intro} Project`}</span>
        <h1 className="text-inter-700 text-lg text-blue-500">
          {data.projectName}
        </h1>
      </div>

      <p className="text-inter-500 text-sm leading-6 text-slate-300">
        {data.description}
      </p>

      <div className="flex flex-row flex-wrap gap-4">
        {data.tools.map((tool, index) => (
          <Tool key={index} name={tool.toolName} />
        ))}
      </div>

      <div className="flex flex-row items-center gap-4">
        <a href={data.links.gitHub}>
          <FiGithub className="size-5 text-slate-300 hover:scale-110 hover:text-blue-500" />
        </a>
        {data.links.website && (
          <a href={data.links.website}>
            <FiArrowUpRight className="size-6 text-slate-300 hover:scale-110 hover:text-blue-500" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};
