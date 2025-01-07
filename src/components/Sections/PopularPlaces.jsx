// "use client";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { MapPinIcon } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const places = [
//   {
//     name: "Mt. Malinao",
//     location: "Malinao, Philippines",
//     price: "$340",
//     image: "/image (1).jpg",
//   },
//   {
//     name: "Statue of Liberty",
//     location: "New York, USA",
//     price: "$340",
//     image: "/image (2).jpg",
//   },
//   {
//     name: "Thousand Island",
//     location: "North Vietnam",
//     price: "$340",
//     image: "/image (3).jpg",
//   },
//   {
//     name: "Basilica Sacre",
//     location: "Paris, France",
//     price: "$340",
//     image: "/image (4).jpg",
//   },
// ];

// export default function PopularPlaces() {
//   const [api, setApi] = useState(null);
//   const [current, setCurrent] = useState(0);
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   const cardVariants = {
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.3,
//         duration: 0.5,
//       },
//     }),
//     hidden: (i) => ({
//       opacity: 0,
//       y: 50,
//       transition: {
//         delay: i * 0.3,
//         duration: 0.5,
//       },
//     }),
//   };

//   const cards = [
//     {
//       src: "/informations/Figure.svg",
//       title1: "Services très",
//       title2: "rapides",
//     },
//     {
//       src: "/informations/Figure(3).svg",
//       title1: "Payement en ligne",
//       title2: "sécurisé",
//     },
//     {
//       src: "/informations/Figure(1).svg",
//       title1: "Devenir membre",
//       title2: "facilement",
//     },
//     {
//       src: "/informations/Figure(2).svg",
//       title1: "Services clients",
//       title2: "24/7",
//     },
//   ];

//   useEffect(() => {
//     if (!api) return;

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-3xl font-bold mb-8">
//         Les destinations les plus populaires
//       </h2>

//       <div className="md:hidden">
//         <Carousel className="w-full" setApi={setApi}>
//           <CarouselContent>
//             {places.map((place, index) => (
//               <CarouselItem key={index}>
//                 <Card className="overflow-hidden">
//                   <img
//                     src={place.image}
//                     alt={place.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <CardContent className="p-4">
//                     <h3 className="font-bold text-lg mb-2">{place.name}</h3>
//                     <p className="text-gray-600 flex items-center">
//                       <MapPinIcon className="w-4 h-4 mr-1" />
//                       {place.location}
//                     </p>
//                   </CardContent>
//                   <CardFooter className="p-4 pt-0 flex justify-between items-center">
//                     <span className="font-bold text-teal-500">
//                       {place.price}
//                     </span>
//                     <button className="text-teal-500 hover:underline">
//                       Réserver maintenant
//                     </button>
//                   </CardFooter>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <div className="flex justify-center gap-2 mt-4">
//             {places.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => api?.scrollTo(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   current === index ? "bg-teal-500" : "bg-gray-300"
//                 }`}
//                 aria-label={`Aller à la diapositive ${index + 1}`}
//               />
//             ))}
//           </div>
//         </Carousel>
//       </div>

//       <div className="container items-center my-6 justify-between ">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-between w-full"
//           initial="hidden"
//           animate={controls}
//         >
//           {places.map((place, index) => (
//             <motion.div key={index} custom={index} variants={cardVariants}>
//               <Card
//                 key={index}
//                 className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
//               >
//                 <img
//                   src={place.image}
//                   alt={place.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <CardContent className="p-4">
//                   <h3 className="font-bold text-lg mb-2">{place.name}</h3>
//                   <p className="text-gray-600 flex items-center">
//                     <MapPinIcon className="w-4 h-4 mr-1" />
//                     {place.location}
//                   </p>
//                 </CardContent>
//                 <CardFooter className="p-4 pt-0 flex justify-between items-center">
//                   <span className="font-bold text-teal-500">{place.price}</span>
//                   <button className="text-teal-500 hover:underline">
//                     Réserver maintenant
//                   </button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const places = [
  {
    name: "Mt. Malinao",
    location: "Malinao, Philippines",
    price: "$340",
    image: "/image (1).jpg",
  },
  {
    name: "Statue of Liberty",
    location: "New York, USA",
    price: "$340",
    image: "/image (2).jpg",
  },
  {
    name: "Thousand Island",
    location: "North Vietnam",
    price: "$340",
    image: "/image (3).jpg",
  },
  {
    name: "Basilica Sacre",
    location: "Paris, France",
    price: "$340",
    image: "/image (4).jpg",
  },
];

export default function PopularPlaces() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
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

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Les destinations les plus populaires
      </h2>

      {/* Carrousel visible uniquement sur les petits écrans */}
      <div className="md:hidden">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {places.map((place, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {place.location}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-bold text-teal-500">
                      {place.price}
                    </span>
                    <button className="text-teal-500 hover:underline">
                      Réserver maintenant
                    </button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-2 mt-4">
            {places.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-teal-500" : "bg-gray-300"
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Cartes visibles uniquement sur les écrans moyens et plus grands */}
      <div className="hidden md:flex flex-wrap justify-between gap-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-between w-full"
          initial="hidden"
          animate={controls}
        >
          {places.map((place, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {place.location}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <span className="font-bold text-teal-500">{place.price}</span>
                  <button className="text-teal-500 hover:underline">
                    Réserver maintenant
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
