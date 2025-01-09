import BookNow from "@/components/Sections/BookNow";
import ExploreMore from "@/components/Sections/ExploreMore";
import Hero from "@/components/Sections/Hero";
import PopularPlaces from "@/components/Sections/PopularPlaces";
import TravelMemories from "@/components/Sections/TravelMemories";

export default function Home() {
  return (
    <div className="min-h-screen  mx-4">
      <main>
        <Hero />
        <PopularPlaces />
        <TravelMemories />
        <ExploreMore />
        <BookNow />
      </main>
    </div>
  );
}
