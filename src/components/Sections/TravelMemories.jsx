import { Button } from "@/components/ui/button";

export default function TravelMemories() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            Travel to make sweet memories
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">
                  Find trips that fit your flexible lifestyle
                </h3>
                <p className="text-gray-600">
                  Discover the perfect journey tailored to your preferences and
                  schedule.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Get back to nature by travel</h3>
                <p className="text-gray-600">
                  Immerse yourself in the beauty of natural landscapes and
                  reconnect with the world around you.
                </p>
              </div>
            </li>
          </ul>
          <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white">
            Find your escape
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Travel memories"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
