"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  Hotel,
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react";

const HawaiiTravelProgram = () => {
  const program = [
    {
      day: 1,
      activities: [
        "Arrivée à l'aéroport international d'Honolulu",
        "Transfert à l'hôtel et check-in",
        "Temps libre pour se détendre et s'acclimater",
        "Dîner de bienvenue au restaurant de l'hôtel avec vue sur l'océan",
      ],
    },
    {
      day: 2,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Visite guidée de Pearl Harbor et du USS Arizona Memorial",
        "Déjeuner dans un restaurant local",
        "Après-midi libre à Waikiki Beach",
        "Dîner et spectacle de luau traditionnel hawaïen",
      ],
    },
    {
      day: 3,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Excursion d'une journée au Parc National des Volcans d'Hawaï",
        "Randonnée guidée autour du cratère Kilauea",
        "Pique-nique dans le parc",
        "Retour à l'hôtel et dîner libre",
      ],
    },
    {
      day: 4,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Matinée de snorkeling à Hanauma Bay",
        "Déjeuner sur la plage",
        "Après-midi de détente ou shopping à Ala Moana Center",
        "Dîner croisière au coucher du soleil",
      ],
    },
    {
      day: 5,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Excursion en hélicoptère au-dessus de l'île",
        "Déjeuner dans une plantation d'ananas",
        "Visite du Polynesian Cultural Center",
        "Dîner et spectacle polynésien",
      ],
    },
    {
      day: 6,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Journée libre pour explorer ou se détendre",
        "Options : cours de surf, spa, golf, ou excursion à North Shore",
        "Dîner d'adieu dans un restaurant gastronomique local",
      ],
    },
    {
      day: 7,
      activities: [
        "Petit-déjeuner à l'hôtel",
        "Temps libre pour les derniers achats ou activités",
        "Check-out de l'hôtel",
        "Transfert à l'aéroport pour le vol retour",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-8"
    >
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <CardTitle className="text-3xl font-bold">
            Voyage Organisé à Hawaii
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Informations Générales
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <Hotel className="w-5 h-5 mr-2 text-teal-500" />
                  <span>
                    Hôtel : Hilton Hawaiian Village Waikiki Beach Resort
                  </span>
                </li>
                <li className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-teal-500" />
                  <span>Durée : 7 jours / 6 nuits</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                  <span>Destination : Honolulu, Hawaii</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Programme Détaillé
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {program.map((day) => (
                  <AccordionItem value={`day-${day.day}`} key={day.day}>
                    <AccordionTrigger className="text-lg font-medium">
                      Jour {day.day}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex}>{activity}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Lieux à Visiter
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pearl Harbor et USS Arizona Memorial</li>
                <li>Waikiki Beach</li>
                <li>Parc National des Volcans d'Hawaï</li>
                <li>Hanauma Bay</li>
                <li>Polynesian Cultural Center</li>
                <li>North Shore (optionnel)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Inclus dans le Prix
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vol aller-retour en classe économique</li>
                <li>Hébergement à l'hôtel Hilton Hawaiian Village</li>
                <li>Petits-déjeuners quotidiens</li>
                <li>Transferts aéroport-hôtel-aéroport</li>
                <li>Toutes les excursions mentionnées dans le programme</li>
                <li>Guide touristique francophone</li>
                <li>Taxes et frais de service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                Non Inclus
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Assurance voyage</li>
                <li>Dépenses personnelles</li>
                <li>Pourboires pour le guide et le chauffeur</li>
                <li>Repas non mentionnés dans le programme</li>
                <li>Activités optionnelles lors de la journée libre</li>
              </ul>
            </section>

            <section className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                  Prix par personne
                </h2>
                <p className="text-3xl font-bold text-teal-600">€ 340</p>
              </div>
              <div className="space-x-2">
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  <PlaneTakeoff className="w-4 h-4 mr-1" />
                  Départ : 15 Juin 2025
                </Badge>
                <Badge
                  variant="outline"
                  className="text-teal-600 border-teal-600"
                >
                  <PlaneLanding className="w-4 h-4 mr-1" />
                  Retour : 21 Juin 2025
                </Badge>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HawaiiTravelProgram;
