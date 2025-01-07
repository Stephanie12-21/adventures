import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";

const places = [
  {
    name: "Amalfi Coast",
    location: "Italy",
    price: "$340",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Taj Mahal",
    location: "India",
    price: "$450",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Hawa Mahal",
    location: "India",
    price: "$320",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Greek Castle",
    location: "Greece",
    price: "$280",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Cape Kaliakra",
    location: "Bulgaria",
    price: "$360",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Santorini",
    location: "Greece",
    price: "$520",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ExploreMore() {
  return (
    <section className="py-16 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Explore more</h2>
        <button className="text-teal-500 hover:underline">
          View all destinations
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {places.map((place, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{place.name}</h3>
              <p className="text-gray-600 flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {place.location}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="font-bold text-teal-500">{place.price}</span>
              <button className="text-teal-500 hover:underline">
                Book Now
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
