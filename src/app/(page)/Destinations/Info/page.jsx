"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
  {
    id: 5,
    name: "Mount Fuji",
    location: "Shizuoka, Japan",
    price: "€ 380",
    image: "/image (5).jpg",
    reviews: 4.8,
  },
  {
    id: 6,
    name: "Great Wall of China",
    location: "Beijing, China",
    price: "€ 450",
    image: "/image (6).jpg",
    reviews: 4.9,
  },
  {
    id: 7,
    name: "Santorini",
    location: "Santorini, Greece",
    price: "€ 420",
    image: "/image (7).jpg",
    reviews: 4.7,
  },
  {
    id: 8,
    name: "Grand Canyon",
    location: "Arizona, USA",
    price: "€ 350",
    image: "/image (8).jpg",
    reviews: 4.6,
  },
  {
    id: 9,
    name: "Pyramids of Giza",
    location: "Cairo, Egypt",
    price: "€ 330",
    image: "/image (9).jpg",
    reviews: 4.3,
  },
  {
    id: 10,
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    price: "€ 370",
    image: "/image (10).jpg",
    reviews: 5,
  },
  {
    id: 11,
    name: "Eiffel Tower",
    location: "Paris, France",
    price: "€ 300",
    image: "/image (11).jpg",
    reviews: 4.9,
  },
  {
    id: 12,
    name: "Niagara Falls",
    location: "Ontario, Canada",
    price: "€ 310",
    image: "/image (12).jpg",
    reviews: 4.6,
  },
  {
    id: 13,
    name: "Colosseum",
    location: "Rome, Italy",
    price: "€ 380",
    image: "/image (13).jpg",
    reviews: 4.7,
  },
  {
    id: 14,
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    price: "€ 400",
    image: "/image (14).jpg",
    reviews: 4.8,
  },
  {
    id: 15,
    name: "Taj Mahal",
    location: "Agra, India",
    price: "€ 340",
    image: "/image (15).jpg",
    reviews: 4.5,
  },
  {
    id: 16,
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    price: "€ 350",
    image: "/image (16).jpg",
    reviews: 4.6,
  },
  {
    id: 17,
    name: "Angkor Wat",
    location: "Siem Reap, Cambodia",
    price: "€ 320",
    image: "/image (17).jpg",
    reviews: 4.7,
  },
  {
    id: 18,
    name: "Banff National Park",
    location: "Alberta, Canada",
    price: "€ 370",
    image: "/image (18).jpg",
    reviews: 4.8,
  },
  {
    id: 19,
    name: "Table Mountain",
    location: "Cape Town, South Africa",
    price: "€ 360",
    image: "/image (19).jpg",
    reviews: 4.6,
  },
  {
    id: 20,
    name: "Petra",
    location: "Ma'an, Jordan",
    price: "€ 400",
    image: "/image (20).jpg",
    reviews: 4.9,
  },
  {
    id: 21,
    name: "Burj Khalifa",
    location: "Dubai, UAE",
    price: "€ 410",
    image: "/image (21).jpg",
    reviews: 4.8,
  },
  {
    id: 22,
    name: "Mount Kilimanjaro",
    location: "Tanzania",
    price: "€ 450",
    image: "/image (22).jpg",
    reviews: 4.7,
  },
  {
    id: 23,
    name: "Iguazu Falls",
    location: "Argentina/Brazil Border",
    price: "€ 340",
    image: "/image (23).jpg",
    reviews: 4.9,
  },
  {
    id: 24,
    name: "Stonehenge",
    location: "Wiltshire, England",
    price: "€ 300",
    image: "/image (24).jpg",
    reviews: 4.5,
  },
];

const InfoDestinations = () => {
  const place = places.find((place) => place.id === parseInt(id, 10));

  if (!place) {
    return <div>Chargement des informations...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-600">{place.name}</h1>
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-64 object-cover rounded-md mt-4"
      />
      <p className="text-gray-600 mt-4">{place.description}</p>
      <p className="text-lg font-semibold text-teal-600 mt-4">
        Localisation : {place.location}
      </p>
      <p className="text-lg font-semibold text-teal-600">
        Prix : {place.price}
      </p>
      <div className="flex items-center mt-4">
        <p className="text-sm text-gray-600 mr-2">Avis :</p>
        <span className="text-yellow-500 font-bold">{place.reviews} ★</span>
      </div>
    </div>
  );
};

export default InfoDestinations;
