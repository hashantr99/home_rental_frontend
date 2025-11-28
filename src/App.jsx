import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import FeaturedListings from "./components/FeaturedListings";

const App = () => {
  return <div className="min-h-screen bg-white text-zinc-900 antialiased">
    {/* NavBar */}
    <NavBar />
    <main>
      <HeroSection />
      <QuoteSection />
      <FeaturedListings />
    </main>
  </div>;
};

export default App;
