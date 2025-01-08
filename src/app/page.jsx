import Adventure from "@/components/Sections/Adventure";
import BookNow from "@/components/Sections/BookNow";
import ExploreMore from "@/components/Sections/ExploreMore";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import Hero from "@/components/Sections/Hero";
import PopularPlaces from "@/components/Sections/PopularPlaces";
import TravelMemories from "@/components/Sections/TravelMemories";

export default function Home() {
  return (
    <div className="min-h-screen  mx-4">
      <Header />
      <main>
        <Hero />
        <PopularPlaces />
        <TravelMemories />
        <ExploreMore />
        <BookNow />
      </main>
      <Footer />
    </div>
  );
}
