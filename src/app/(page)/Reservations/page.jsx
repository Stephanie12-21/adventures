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
import { SuccessModal } from "@/app/(modal)/reservation/SuccessModal";
import { ErrorModal } from "@/app/(modal)/reservation/ErrorModal";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");
  const [adults, setAdults] = useState("");
  const [childrens, setChildrens] = useState("");
  const [babies, setBabies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const passengers =
      parseInt(adults, 10) + parseInt(childrens, 10) + parseInt(babies, 10);

    const data = {
      nom,
      email,
      phone1: `+${phone1}`,
      phone2: `+${phone2}`,
      adults,
      childrens,
      babies,
      message,
      passengers: parseInt(adults) + parseInt(childrens) + parseInt(babies),
    };

    try {
      const response = await fetch("/api/reservation/", {
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
    setAdults("");
    setEmail("");
    setBabies("");
    setChildrens("");
    setPhone1("");
    setPhone2("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center pt-10 pb-10 space-y-5 lg:space-y-0 lg:space-x-10 px-5">
        <div className="relative hidden md:block shadow-lg w-full max-w-md lg:max-w-lg xl:max-w-2xl h-[950px] lg:h-[950px] xl:h-[950px] flex-shrink-0 rounded-2xl overflow-hidden">
          <video
            src="/reservation.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
        </div>

        <Card className="w-full max-w-xl lg:max-w-lg xl:max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-6">
            <CardTitle className="text-center text-3xl font-bold">
              Réservation
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="pt-8">
              <div className="grid w-full items-center gap-4">
                <div className="grid w-full items-center space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="nom"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Au nom de :
                    </label>
                    <Input
                      id="nom"
                      placeholder="MAMINIAINA Stéphanie"
                      value={nom}
                      required
                      onChange={(e) => setNom(e.target.value)}
                      className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Adresse email :
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

                  <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-2">
                    <div className=" w-full space-y-2">
                      <label
                        htmlFor="num"
                        className="text-right text-[#425466] font-medium text-[16px]"
                      >
                        Numéro de téléphone (1) :
                      </label>
                      <PhoneInput
                        country={"mg"}
                        value={phone1}
                        required
                        onChange={setPhone1}
                        placeholder="Entrez votre numéro"
                        inputStyle={{ width: "100%", height: "40px" }}
                        buttonClass="custom-flag-style"
                        inputClass="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                      />
                    </div>
                    <div className=" w-full space-y-2">
                      <label
                        htmlFor="num"
                        className="text-right text-[#425466] font-medium text-[16px]"
                      >
                        Numéro de téléphone (2) :
                      </label>
                      <PhoneInput
                        country={"mg"}
                        value={phone2}
                        required
                        onChange={setPhone2}
                        placeholder="Entrez votre numéro"
                        inputStyle={{ width: "100%", height: "40px" }}
                        buttonClass="custom-flag-style"
                        inputClass="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="date"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      Nombre de passagers :
                    </label>
                    <div className="flex flex-col lg:flex-row w-full space-x-0 lg:space-x-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="nom"
                          className="text-right text-[#425466] font-medium text-[14px]"
                        >
                          Adultes (+18 ans) :
                        </label>
                        <Input
                          id="nom"
                          type="number"
                          placeholder="2"
                          value={adults}
                          required
                          onChange={(e) => setAdults(e.target.value)}
                          className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="nom"
                          className="text-right text-[#425466] font-medium text-[14px]"
                        >
                          Enfants (3-18 ans) :
                        </label>
                        <Input
                          id="nom"
                          type="number"
                          placeholder="2"
                          value={childrens}
                          required
                          onChange={(e) => setChildrens(e.target.value)}
                          className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="nom"
                          className="text-right text-[#425466] font-medium text-[14px]"
                        >
                          Bébés (0-3 ans) :
                        </label>
                        <Input
                          id="nom"
                          type="number"
                          placeholder="0"
                          value={babies}
                          required
                          onChange={(e) => setBabies(e.target.value)}
                          className="col-span-3 items-start w-full bg-[#edf2f7] text-[15px] text-[#27272E] font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-right text-[#425466] font-medium text-[16px]"
                    >
                      D&apos;autres informations importantes à signaler?
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Exemple: Allergies alimentaires, besoins spéciaux, etc."
                      className="col-span-3 w-full h-60 bg-[#edf2f7] text-[15px] text-[#27272E] font-medium p-2 rounded-md"
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
                {loading
                  ? "Traiement en cours..."
                  : "Enregistrer la réservation"}
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
