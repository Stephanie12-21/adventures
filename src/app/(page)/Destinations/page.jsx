"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPinIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    price: "€ 400",
    image: "/image (2).jpg",
    reviews: 5,
  },
  {
    name: "Thousand Island",
    location: "North Vietnam",
    price: "€ 320",
    image: "/image (3).jpg",
    reviews: 4,
  },
  {
    name: "Basilica Sacre",
    location: "Paris, France",
    price: "€ 360",
    image: "/image (4).jpg",
    reviews: 3.5,
  },
  {
    name: "Mount Fuji",
    location: "Shizuoka, Japan",
    price: "€ 380",
    image: "/image (5).jpg",
    reviews: 4.8,
  },
  {
    name: "Great Wall of China",
    location: "Beijing, China",
    price: "€ 450",
    image: "/image (6).jpg",
    reviews: 4.9,
  },
  {
    name: "Santorini",
    location: "Santorini, Greece",
    price: "€ 420",
    image: "/image (7).jpg",
    reviews: 4.7,
  },
  {
    name: "Grand Canyon",
    location: "Arizona, USA",
    price: "€ 350",
    image: "/image (8).jpg",
    reviews: 4.6,
  },
  {
    name: "Pyramids of Giza",
    location: "Cairo, Egypt",
    price: "€ 330",
    image: "/image (9).jpg",
    reviews: 4.3,
  },
  {
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    price: "€ 370",
    image: "/image (10).jpg",
    reviews: 5,
  },
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    price: "€ 300",
    image: "/image (11).jpg",
    reviews: 4.9,
  },
  {
    name: "Niagara Falls",
    location: "Ontario, Canada",
    price: "€ 310",
    image: "/image (12).jpg",
    reviews: 4.6,
  },
  {
    name: "Colosseum",
    location: "Rome, Italy",
    price: "€ 380",
    image: "/image (13).jpg",
    reviews: 4.7,
  },
  {
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    price: "€ 400",
    image: "/image (14).jpg",
    reviews: 4.8,
  },
  {
    name: "Taj Mahal",
    location: "Agra, India",
    price: "€ 340",
    image: "/image (15).jpg",
    reviews: 4.5,
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    price: "€ 350",
    image: "/image (16).jpg",
    reviews: 4.6,
  },
  {
    name: "Angkor Wat",
    location: "Siem Reap, Cambodia",
    price: "€ 320",
    image: "/image (17).jpg",
    reviews: 4.7,
  },
  {
    name: "Banff National Park",
    location: "Alberta, Canada",
    price: "€ 370",
    image: "/image (18).jpg",
    reviews: 4.8,
  },
  {
    name: "Table Mountain",
    location: "Cape Town, South Africa",
    price: "€ 360",
    image: "/image (19).jpg",
    reviews: 4.6,
  },
  {
    name: "Petra",
    location: "Ma'an, Jordan",
    price: "€ 400",
    image: "/image (20).jpg",
    reviews: 4.9,
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, UAE",
    price: "€ 410",
    image: "/image (21).jpg",
    reviews: 4.8,
  },
  {
    name: "Mount Kilimanjaro",
    location: "Tanzania",
    price: "€ 450",
    image: "/image (22).jpg",
    reviews: 4.7,
  },
  {
    name: "Iguazu Falls",
    location: "Argentina/Brazil Border",
    price: "€ 340",
    image: "/image (23).jpg",
    reviews: 4.9,
  },
  {
    name: "Stonehenge",
    location: "Wiltshire, England",
    price: "€ 300",
    image: "/image (24).jpg",
    reviews: 4.5,
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

export default function ExploreMore() {
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

                    <Button className="text-white bg-teal-500 hover:bg-teal-500 hover:text-white">
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
                key={index}
                className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform"
              >
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
                  <Button className="text-white bg-teal-500 hover:bg-teal-500 hover:text-white">
                    Réserver maintenant
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center border rounded-full ${
            currentPage === 1
              ? "text-gray-400 border-gray-200"
              : "text-blue-600"
          }`}
        >
          <ChevronLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-8 h-8 flex items-center justify-center border rounded-full ${
              currentPage === index + 1
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "text-blue-600 border-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center border rounded-full ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-200"
              : "text-blue-600"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
