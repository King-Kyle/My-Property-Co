import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 },
};

export default function CTA() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animVariants}
      className="bg-white"
    >
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading text-primary sm:text-4xl">
          <span className="block">Lorem ipsum dolor sit amet</span>
        </h2>
        <p className="mt-16 text-sm leading-6 text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          scelerisque dui. Proin porta consectetur euismod. Duis pharetra
          dapibus blandit. Aenean lobortis orci a egestas eleifend. Pellentesque
          faucibus mi et interdum molestie. Quisque in diam felis. Ut vitae
          elementum leo.
        </p>
        <a
          href="#"
          className="transition-colors duration-300 transform mt-12 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-primary sm:w-auto"
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
}
