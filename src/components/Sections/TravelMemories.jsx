"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const travelFeatures = [
  {
    iconBg: "bg-[#92ABD3]",
    title: "Find trips that fit your flexible lifestyle",
    description:
      "Discover the perfect journey tailored to your preferences and schedule.",
  },
  {
    iconBg: "bg-[#E49C95]",
    title: "Get back to nature by travel",
    description:
      "Immerse yourself in the beauty of natural landscapes and reconnect with the world around you.",
  },
  {
    iconBg: "bg-[#F4A24C]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
  },
  {
    iconBg: "bg-[#BCD921]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
  },
  {
    iconBg: "bg-[#F9DC5C]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center my-10">
          Voyager pour créer des souvenirs inoubliables
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-10 md:space-x-24 md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <ul className="space-y-8">
            <motion.div
              ref={ref}
              className="flex md:flex-col gap-4 items-center justify-between w-full"
              initial="hidden"
              animate={controls}
            >
              {" "}
              {travelFeatures.map((feature, index) => (
                <motion.div key={index} custom={index} variants={cardVariants}>
                  <div key={index} className="space-y-3">
                    <div
                      className={`${feature.iconBg} py-2  px-3 rounded-sm font-extrabold text-white text-xl max-w-fit mr-4`}
                    >
                      0{index + 1}
                    </div>
                    <li className="flex items-start">
                      <div>
                        <h3 className=" text-2xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ul>
          <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">
            Trouvez vos destinations de rêves
          </Button>
        </div>
        <div className="md:w-[45%]">
          <Image
            width={600}
            height={400}
            src="/image (2).jpg"
            alt="Travel memories"
            className="rounded-lg shadow-lg w-[600px] h-full object-cover"
          />
        </div>
        {/* <div className="md:w-[45%]">
          <Card className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] relative">
              <Image
                width={600}
                height={400}
                src="/image (2).jpg"
                alt="Travel memories"
                className="rounded-lg shadow-lg w-[600px] h-full object-cover"
              />

              
              <div className="absolute inset-0 p-4">
              
                <div className="absolute left-4 top-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 pr-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center text-sm font-medium">
                    <span>8.4</span>
                    <Star className="h-4 w-4 ml-1 fill-current" />
                  </div>
                </div>

               
                <div className="absolute right-4 top-1/3 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 pr-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center text-sm font-medium">
                    <span>9.2</span>
                    <Star className="h-4 w-4 ml-1 fill-current" />
                  </div>
                </div>

              
                <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 pr-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center text-sm font-medium">
                    <span>8.9</span>
                    <Star className="h-4 w-4 ml-1 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
