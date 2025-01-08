"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, MapPin, Users, Leaf, Mail, Share, Heart } from "lucide-react";

const travelFeatures = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-500" />,
    iconBg: "bg-blue-100",
    title: "Trouvez des voyages selon vos préférences",
    description:
      "Découvrez les destinations parfaitement adaptées à votre budget et à votre emploi du temps.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    iconBg: "bg-green-100",
    title: "Reconnectez-vous avec la nature",
    description:
      "Immergez-vous dans la beauté des paysages naturels et reconnectez-vous avec le monde qui vous entoure.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    iconBg: "bg-orange-100",
    title: "Voyagez avec vos meilleurs amis et familles",
    description:
      "Créez des souvenirs inoubliables avec vos plus proches compagnons lors de vos voyages.",
  },
  {
    icon: <Mail className="w-6 h-6 text-purple-500" />,
    iconBg: "bg-purple-100",
    title: "Abonnez-vous à notre newsletter.",
    description:
      "Soyez les premiers avertis pour des nouvelles destinations, des voyages palpitants et des aventures formidables.",
  },
];

export default function TravelMemories() {
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
    <section className="py-16 px-6">
      <div className="flex  items-center justify-center">
        <h1 className="text-4xl text-gray-800 font-bold text-center my-10">
          Voyager pour créer des souvenirs inoubliables
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-10 md:space-x-24 md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <ul className="space-y-8">
            <motion.div
              ref={ref}
              className="flex md:flex-col flex-col gap-10 items-center justify-between w-full"
              initial="hidden"
              animate={controls}
            >
              {travelFeatures.map((feature, index) => (
                <motion.div key={index} custom={index} variants={cardVariants}>
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.iconBg} p-3 rounded-full`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Button className="mt-12 px-8 py-6 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Plane className="mr-3 h-6 w-6" />
              Trouvez vos destinations de rêve
            </Button>
          </motion.div>
        </div>
        <div className="md:w-[45%] hidden md:block">
          <Image
            width={600}
            height={400}
            src="/image (2).jpg"
            alt="Travel memories"
            className="rounded-lg shadow-lg w-[600px] h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
