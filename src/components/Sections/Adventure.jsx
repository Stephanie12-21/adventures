export default function Adventure() {
  const adventures = [
    { name: "Paris", image: "/placeholder.svg?height=100&width=100" },
    { name: "New York", image: "/placeholder.svg?height=100&width=100" },
    { name: "Seoul", image: "/placeholder.svg?height=100&width=100" },
    { name: "Bali", image: "/placeholder.svg?height=100&width=100" },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
        Let's go on an adventure
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {adventures.map((adventure, index) => (
          <div key={index} className="text-center">
            <div className="relative inline-block">
              <img
                src={adventure.image}
                alt={adventure.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
              />
              <div className="absolute -top-2 -left-2 bg-teal-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm">
                {index + 1}
              </div>
            </div>
            <p className="mt-2 font-semibold">{adventure.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
