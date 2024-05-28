import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Me from "../assets/img/me.jpg";

export default function About() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });
  const animationControls = useAnimation();
  const titleControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
      titleControls.start({ opacity: 1, x: 0 });
      imageControls.start({ opacity: 1, y: 0 });
    }
  }, [inView, animationControls, titleControls, imageControls]);

  return (
    <div ref={ref} className="midSection">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={titleControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="flex flex-row items-center gap-1"
      >
        <span className="sectionNumber">01.</span>
        <h1 className="sectionTitle">About</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={animationControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className="md:flex md:gap-10"
      >
        <div className="text-inter-500 space-y-3 text-pretty text-sm leading-6 text-slate-300 md:text-base xl:text-lg">
          <p>
            Hello again! I&apos;m Luca, a Junior Full Stack Developer based in
            Messina, Sicily.
            <br />
            My journey began at 14 years old, when I decided to start studying
            IT and Telecommunications.
            <br /> I graduated in 2021 with a grade of 100/100ths.
          </p>

          <p>
            After that, I took part in the Full Stack Development course offered
            by{" "}
            <span className="whitespace-nowrap">
              <a
                href="https://www.start2impact.it"
                className="link text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                start2impact
              </a>
              ,
            </span>{" "}
            from which I obtained a{" "}
            <a
              href="/master.pdf"
              className="link text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              master&apos;s&nbsp;degree
            </a>
            .
            <br />
            This experience contributed significantly to increasing my
            educational background, allowing me to learn the fundamental
            technologies in web development.
          </p>

          <p>
            Today I&apos;m ready and excited to put my skills into practice. My
            goal is to continue to grow professionally, facing new challenges
            and seizing every learning opportunity in my journey as a web
            developer.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={imageControls}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          onMouseEnter={() =>
            imageControls.start(
              { rotateX: 10, rotateY: 10 },
              { duration: 0.3, ease: "easeOut" },
            )
          }
          onMouseLeave={() =>
            imageControls.start(
              { rotateX: 0, rotateY: 0 },
              { duration: 0.5, ease: "easeOut" },
            )
          }
          src={Me}
          className="h-full rounded max-md:hidden md:w-44 lg:w-48"
        ></motion.img>
      </motion.div>
    </div>
  );
}
