"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Adventure() {
  const adventures = [
    { name: "Paris", image: "/image (22).jpg" },
    { name: "New York", image: "/image (18).jpg" },
    { name: "Seoul", image: "/image (15).jpg" },
    { name: "Bali", image: "/image (6).jpg" },
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: (i) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
        Nos aventures de ce mois
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 w-full"
          initial="hidden"
          animate={controls}
        >
          {adventures.map((adventure, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <div key={index} className="text-center">
                <div className="relative inline-block">
                  <img
                    src={adventure.image}
                    alt={adventure.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -left-2 bg-teal-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm">
                    {index + 1}
                  </div>
                </div>
                <p className="mt-2 font-semibold">{adventure.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
