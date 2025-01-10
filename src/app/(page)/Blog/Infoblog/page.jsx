"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, ClockIcon, TagIcon } from "lucide-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogPost = {
  id: 1,
  title: "Les meilleures destinations pour l'été 2025",
  content: `
    <p>L'été 2025 s'annonce comme une saison exceptionnelle pour les voyageurs du monde entier. Après des années de restrictions, le monde s'ouvre à nouveau aux aventuriers en quête de nouvelles expériences. Voici notre sélection des destinations incontournables pour cet été :</p>

    <h2
    style="
    color: #1f2937;
    padding-top : 12px;
    padding-bottom : 10px;
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    ">1. Les îles grecques</h2>
    <p>Avec leurs eaux cristallines, leurs plages de sable blanc et leur riche histoire, les îles grecques restent une valeur sûre. Ne manquez pas Santorin pour ses couchers de soleil légendaires et Mykonos pour son ambiance festive.</p>

    <h2
    style="
    color: #1f2937;
    padding-top : 12px;
    padding-bottom : 10px;
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    ">2. Le Japon</h2>
    <p>Mélange unique de tradition et de modernité, le Japon offre une expérience culturelle incomparable. De Tokyo à Kyoto, en passant par les onsen des montagnes, chaque région vous réserve des surprises.</p>

    <h2
    style="
    color: #1f2937;
    padding-top : 12px;
    padding-bottom : 10px;
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    ">3. La Patagonie, Argentine</h2>
    <p>Pour les amateurs de nature sauvage, la Patagonie est un must. Ses glaciers majestueux, ses lacs turquoise et sa faune unique en font une destination de rêve pour les randonneurs et les photographes.</p>

    <h2
    style="
    color: #1f2937;
    padding-top : 12px;
    padding-bottom : 10px;
    margin: 0;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    ">4. Lisbonne, Portugal</h2>
    <p>Ville aux sept collines, Lisbonne séduit par son charme authentique, sa gastronomie délicieuse et ses nuits animées. Ne manquez pas de déguster un pastel de nata en admirant le coucher de soleil depuis un miradouro.</p>

    <p
    style="
    padding-top : 12px;
    padding-bottom : 10px;
    ">Quelle que soit la destination que vous choisirez, l'été 2025 promet d'être riche en découvertes et en souvenirs inoubliables. N'oubliez pas de réserver tôt pour profiter des meilleures offres !</p>
  `,
  date: "2025-01-05",
  readTime: "5 min",
  author: {
    name: "Sophie Dubois",
    image: "/images2.jpg",
  },
  mainImage: "/images3.jpg",
  images: ["/images.jpg", "/foret.jpg", "/alone.jpg", "/mada.jpg"],
  tags: ["Voyage", "Été", "Destinations"],
};

const BlogPostDetail = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const allImages = [blogPost.mainImage, ...blogPost.images];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
            <CardTitle className="text-3xl font-bold">
              {blogPost.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={blogPost.author.image}
                        alt={blogPost.author.name}
                      />
                      <AvatarFallback>
                        {blogPost.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{blogPost.author.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(blogPost.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {blogPost.readTime} de lecture
                  </div>
                </div>
                <div
                  className="prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      <TagIcon className="w-4 h-4 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div
                  className="relative h-64 w-full cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(0);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={blogPost.mainImage}
                    alt={blogPost.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {blogPost.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative h-48 w-full cursor-pointer"
                        onClick={() => {
                          setPhotoIndex(index + 1);
                          setLightboxOpen(true);
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Image ${index + 1} for ${blogPost.title}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
        />
      )}
    </div>
  );
};

export default BlogPostDetail;
