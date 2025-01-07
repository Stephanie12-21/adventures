import { Button } from "@/components/ui/button";
import Image from "next/image";

const travelFeatures = [
  {
    iconBg: "bg-[#92ABD3]",
    title: "Find trips that fit your flexible lifestyle",
    description:
      "Discover the perfect journey tailored to your preferences and schedule.",
  },
  {
    iconBg: "bg-[#E49C95]",
    title: "Get back to nature by travel",
    description:
      "Immerse yourself in the beauty of natural landscapes and reconnect with the world around you.",
  },
  {
    iconBg: "bg-[#F4A24C]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
  },
  {
    iconBg: "bg-[#BCD921]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
  },
  {
    iconBg: "bg-[#F9DC5C]",
    title: "Travel with your best friends",
    description:
      "Create unforgettable memories with your closest companions on your travels.",
  },
];

export default function TravelMemories() {
  return (
    <section className="py-16 px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center my-10">
          Voyager pour créer des souvenirs inoubliables
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-10 md:space-x-24 md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <ul className="space-y-8">
            {travelFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div
                  className={`${feature.iconBg} py-2  px-3 rounded-sm font-extrabold text-white text-xl max-w-fit mr-4`}
                >
                  0{index + 1}
                </div>
                <li className="flex items-start">
                  <div>
                    <h3 className=" text-2xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">
            Trouvez vos destinations de rêves
          </Button>
        </div>
        <div className="md:w-[45%]">
          <Image
            width={600}
            height={400}
            src="/image (2).jpg"
            alt="Travel memories"
            className="rounded-lg shadow-lg w-[600px] h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
