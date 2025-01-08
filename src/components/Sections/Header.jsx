"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Acceuil" },
    { href: "/", label: "Destinations" },
    { href: "/", label: "Blog & Partages" },
    { href: "/", label: "Contact" },
  ];

  return (
    <header className=" my-3">
      <div className="container items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Chronique de voyage Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-2xl font-bold text-teal-500">
                Adventures
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-teal-500 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center justify-between space-x-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Button className=" px-8 py-6 bg-gradient-to-r  from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Réserver dès maintenant
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex px-3 py-2 rounded-md items-center justify-center text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <div className=" flex flex-col space-y-4 px-3">
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
              Réserver dès maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
