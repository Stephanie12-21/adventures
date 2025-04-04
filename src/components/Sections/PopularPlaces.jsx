"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { StarIcon, MapPinIcon } from "lucide-react";

const places = [
  {
    id: 1,
    name: "Mt. Malinao",
    location: "Malinao, Philippines",
    price: "€ 340",
    image: "/image (1).jpg",
    reviews: 4.5,
  },
  {
    id: 2,
    name: "Statue of Liberty",
    location: "New York, USA",
    price: "€ 400",
    image: "/image (2).jpg",
    reviews: 5,
  },
  {
    id: 3,
    name: "Thousand Island",
    location: "North Vietnam",
    price: "€ 320",
    image: "/image (3).jpg",
    reviews: 4,
  },
  {
    id: 4,
    name: "Basilica Sacre",
    location: "Paris, France",
    price: "€ 360",
    image: "/image (4).jpg",
    reviews: 3.5,
  },
];


export default function ExploreMore() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(places.length / itemsPerPage);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = places.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  const handleReservation = () => {
    router.push("/Reservations");
  };

  const handleCardClick = () => {
    router.push(`/Destinations/Info/`);
  };

  return (
    <section className="py-16 mt-10 px-6">
      <div className="flex  items-center justify-center mb-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Destinations Adventures
          </h1>
          <p className="text-gray-600 mt-2">
            Notre catalogue de voyages pour des aventures inoubliables.
          </p>
        </header>
      </div>
      <div className="md:hidden">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {paginatedPosts.map((place, index) => (
              <CarouselItem key={index}>
                <Card
                  onClick={() => handleCardClick()}
                  className="overflow-hidden"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-teal-600 px-3 py-1">
                    <StarIcon className="w-4 h-4 inline-block mr-1 text-yellow-500 " />
                    {place.reviews.toFixed(1)}
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

                    <Button
                      onClick={handleReservation}
                      className="text-white bg-teal-500 hover:bg-teal-500 hover:text-white"
                    >
                      Réserver maintenant
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2 mt-4">
          {paginatedPosts.map((_, index) => (
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
      </div>

      <div className="hidden md:flex flex-wrap justify-between gap-6">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-between w-full"
          initial="hidden"
          animate={controls}
        >
          {paginatedPosts.map((place, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onClick={() => handleCardClick()}
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-teal-600 px-3 py-1">
                  <StarIcon className="w-4 h-4 inline-block mr-1 text-yellow-500 " />
                  {place.reviews.toFixed(1)}
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
                  <Button
                    onClick={handleReservation}
                    className="text-white bg-teal-500 hover:bg-teal-500 hover:text-white"
                  >
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
