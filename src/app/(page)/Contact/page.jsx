"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Image from "next/image";
import { SuccessModal } from "@/app/(modal)/contact/SuccessModal";
import { ErrorModal } from "@/app/(modal)/contact/ErrorModal";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      nom,
      prenom,
      email,
      phone: `+${phone}`,
      objet,
      message,
    };

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          "Une erreur s'est produite lors de l'envoi du message."
        );
      }
      setIsSuccessModalOpen(true);
      handleResetForm();
    } catch (error) {
      setIsErrorModalOpen(true);
      setError("Une erreur s'est produite lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setNom("");
    setPrenom("");
    setEmail("");
    setPhone("");
    setObjet("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-10 pb-10 space-y-5 lg:space-y-0 lg:space-x-10 px-5">
        <Card className="w-full max-w-xl lg:max-w-lg xl:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6">
            <CardTitle className="text-center text-3xl font-bold">
              Prenons contact
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="pt-8">
              <div className="grid w-full items-center gap-4">
                <div className="grid w-full items-center gap-2">
                  <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-2">
                    <div className="w-full space-y-2">
                      <label
                        htmlFor="nom"
                        className="text-right text-[#425466] font-medium text-[16px]"
                      >
                        Nom
                      </label>
                      <Input
                        id="nom"
                        placeholder="MAMINIAINA"
                        value={nom}
                        required
                        onChange={(e) => setNom(e.target.value)}
                        className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                      />
                    </div>

                    <div className="w-full space-y-2 mt-2 lg:mt-0">
                      <label
                        htmlFor="prenom"
                        className="text-right text-[#425466] font-medium text-[16px]"
                      >
                        Prénom
                      </label>
                      <Input
                        id="prenom"
                        placeholder="Stéphanie"
                        value={prenom}
                        required
                        onChange={(e) => setPrenom(e.target.value)}
                        className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Votre adresse email
                    </label>
                    <Input
                      id="email"
                      placeholder="stephaniepageot@gmail.com"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="num"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Votre numéro de téléphone
                    </label>
                    <PhoneInput
                      country={"mg"}
                      value={phone}
                      required
                      onChange={setPhone}
                      placeholder="Entrez votre numéro"
                      inputStyle={{ width: "100%", height: "40px" }}
                      buttonClass="custom-flag-style"
                      inputClass="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="objet"
                      className="text-[#425466] font-medium text-[16px]"
                    >
                      L&apos;objet du message
                    </label>
                    <Input
                      id="objet"
                      placeholder="L'objet du message"
                      value={objet}
                      required
                      onChange={(e) => setObjet(e.target.value)}
                      className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Écrivez votre message ici ..."
                      className="col-span-3 w-full h-64 bg-[#edf2f7] text-[15px] text-[#27272E] font-medium p-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 p-6 bg-gray-50">
              <Button
                className="w-full py-6 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full py-6 text-blue-500 border-blue-500 hover:bg-blue-50 hover:text-blue-500 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Annuler
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="relative  hidden md:block shadow-lg w-full max-w-md lg:max-w-lg xl:max-w-2xl h-[900px] lg:h-[900px] xl:h-[900px] flex-shrink-0 rounded-lg  overflow-hidden">
          <Image src="/image (5).jpg" alt="image montagne" fill />
        </div>
      </div>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
      />
    </motion.div>
  );
};

export default Contact;
