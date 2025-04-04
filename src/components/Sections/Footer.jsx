"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { SuccessModal } from "@/app/(modal)/newsletter/SuccessModal";
import { ErrorModal } from "@/app/(modal)/newsletter/ErrorModal";
import { InfoModal } from "@/app/(modal)/newsletter/InfoModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setIsErrorModalOpen(true);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setEmail("");
      } else if (response.status === 409) {
        setIsInfoModalOpen(true);
        setEmail("");
      } else {
        setIsErrorModalOpen(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setIsErrorModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const dataIcons = [
    {
      url: "https://web.facebook.com/stephanie.maminiaina.12/",
      img: "/facebook.svg",
      name: "Facebook",
    },
    {
      url: "https://www.linkedin.com/in/st%C3%A9phanie-maminiaina-262066303/",
      img: "/linkedin.svg",
      name: "LinkedIn",
    },
    {
      url: "+261 38 11 826 27",
      img: "/whatsapp (1).svg",
      name: "WhatsApp",
    },
    // {
    //   name: "téléphone",
    //   url: "+261 38 11 826 27 ",
    //   img: "/phone.svg",
    // },
    {
      name: "email",
      url: "stephaniepageot42@gmail.com",
      img: "/email.svg",
    },
  ];

  return (
    <footer className=" px-4 sm:px-6 lg:px-8 mt-5 ">
      <div className="max-w-full mx-auto flex flex-col md:flex-row mt-10 md:space-x-24 md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/3 mb-8 md:mb-0">
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
                Zaha
              </span>
            </Link>
          </div>
          <p className="text-gray-600 mt-5">
            Venez découvrir les merveilles du Madagascar avec Zaha.
            <br />
            Notre objectif? Vous faire vivre des expériences inoubliables vers
            vos destinations de rêves.
            <br />
            Alors ne tardez plus, votre voyage commence ici ✈️
          </p>
        </div>

        <div className="md:w-[45%]">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Soyez les premiers au courant grâce à notre newsletter.
            </h3>
            <div className="flex space-x-3 mt-5 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                id="email"
                className="border text-base w-full rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                aria-label="Votre adresse email"
              />

              <Button
                onClick={handleSubmit}
                disabled={loading}
                className=" px-8 py-6  bg-gradient-to-r  from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {loading ? "Traitement en cours..." : "S'abonner"}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 w-full">
            <div className="flex justify-center items-center gap-x-10">
              {dataIcons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center ">
                  <Link
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={icon.img}
                      width={40}
                      height={40}
                      alt={icon.name}
                      className="hover:scale-110 transition-transform duration-200"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-gray-600 mb-10 mt-20">
        &copy; Copyright {currentYear} Zaha | Conçu par{" "}
        <Link
          href="https://stephanie-maminiaina.vercel.app/"
          className="text-teal-500"
        >
          Stéphanie MAMINIAINA
        </Link>{" "}
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </footer>
  );
}
