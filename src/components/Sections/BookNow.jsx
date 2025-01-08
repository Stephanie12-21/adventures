"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
export default function BookNow() {
  return (
    <section className="py-16 px-6">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="/images.jpg"
          alt="Book now"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Réservez vos billets et allons à l&apos;aventure !
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Button className="mt-12 px-8 py-6 bg-gradient-to-r  from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Réserver dès maintenant
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
