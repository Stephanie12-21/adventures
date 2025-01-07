import { Button } from "@/components/ui/button";

export default function BookNow() {
  return (
    <section className="py-16 px-6">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Book now"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Book tickets and go now!
            </h2>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
