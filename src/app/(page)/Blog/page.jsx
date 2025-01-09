"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Les meilleures destinations pour l'été 2025",
    excerpt:
      "Découvrez notre sélection des destinations les plus prisées pour vos vacances estivales.",
    date: "2025-05-15",
    image: "/images.jpg",
  },
  {
    id: 2,
    title: "Comment économiser sur les billets d'avion",
    excerpt: "Nos astuces pour trouver les meilleurs tarifs pour vos vols.",
    date: "2025-05-10",
    image: "/images2.jpg",
  },
  {
    id: 3,
    title: "Les 10 accessoires indispensables pour un voyage réussi",
    excerpt:
      "Préparez votre valise avec ces objets essentiels pour partir l'esprit tranquille.",
    date: "2025-05-05",
    image: "/images3.jpg",
  },
  {
    id: 4,
    title: "Road trip : les plus belles routes à parcourir en 2025",
    excerpt:
      "Découvrez des itinéraires spectaculaires pour vos aventures en voiture.",
    date: "2025-05-12",
    image: "/oute.jpg",
  },
  {
    id: 5,
    title: "Voyager seul : conseils et bienfaits",
    excerpt:
      "Pourquoi voyager en solo peut être une expérience unique et enrichissante.",
    date: "2025-05-08",
    image: "/alone.jpg",
  },
  {
    id: 6,
    title: "Les plus belles plages secrètes à découvrir",
    excerpt:
      "Explorez des joyaux cachés loin des foules pour un moment de détente.",
    date: "2025-05-06",
    image: "/plage.jpg",
  },
  {
    id: 7,
    title: "Voyager en famille : astuces pour un séjour serein",
    excerpt: "Comment organiser un voyage mémorable pour petits et grands.",
    date: "2025-05-04",
    image: "/family.jpg",
  },
  {
    id: 8,
    title: "Madagascar : découvrez l'île des merveilles",
    excerpt:
      "Une destination unique pour les amateurs de nature et d'aventure.",
    date: "2025-05-03",
    image: "/mada.jpg",
  },
  {
    id: 9,
    title: "Gastronomie et voyages : les spécialités à ne pas manquer",
    excerpt: "Un tour du monde culinaire pour éveiller vos papilles.",
    date: "2025-05-02",
    image: "/eating.jpg",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Blog Adventures
          </h1>
          <p className="text-gray-600 mt-2">
            Explorez nos dernières aventures et conseils de voyage
          </p>
        </header>

        <div className="space-y-8">
          {paginatedPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                  <CardTitle className="text-xl font-semibold">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-300"
                  >
                    Lire plus
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
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
      </motion.div>
    </div>
  );
};

export default Blog;
