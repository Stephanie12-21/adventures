"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const places = [
  {
    name: "Mt. Malinao",
    location: "Malinao, Philippines",
    price: "€ 340",
    image: "/image (1).jpg",
    reviews: 4.5,
  },
  {
    name: "Statue of Liberty",
    location: "New York, USA",
    price: "€ 340",
    image: "/image (2).jpg",
    reviews: 5,
  },
  {
    name: "Thousand Island",
    location: "North Vietnam",
    price: "€ 340",
    image: "/image (3).jpg",
    reviews: 4,
  },
  {
    name: "Basilica Sacre",
    location: "Paris, France",
    price: "€ 340",
    image: "/image (4).jpg",
    reviews: 3.5,
  },
];

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center space-x-1 text-yellow-400 text-xl">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span key={`full-${index}`}>&#9733;</span>
        ))}

      {hasHalfStar && <span>&#9734;</span>}

      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">
            &#9733;
          </span>
        ))}
    </div>
  );
};

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
      <motion.h1
        className="text-4xl font-bold text-start mb-16 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Les destinations les plus populaires
      </motion.h1>

      <div className="md:hidden ">
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
                  <Badge className="absolute top-4 right-4 bg-white/90 text-teal-600 px-3 py-1">
                    <StarRating rating={place.reviews} />
                  </Badge>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1 text-teal-500" />
                      {place.location}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-teal-500">
                        {place.price}
                      </span>
                    </div>

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

      <div className="hidden md:flex flex-wrap justify-between gap-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-between w-full"
          initial="hidden"
          animate={controls}
        >
          {places.map((place, index) => (
            <motion.div key={index} custom={index} variants={cardVariants}>
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-teal-600 px-3 py-1">
                  <StarRating rating={place.reviews} />
                </Badge>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1 text-teal-500" />
                    {place.location}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-xl text-teal-500">
                      {place.price}
                    </span>
                  </div>
                  <Button className="text-white bg-teal-500 hover:bg-teal-600">
                    Réserver maintenant
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
