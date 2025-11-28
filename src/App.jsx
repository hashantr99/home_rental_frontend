import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return <div className="min-h-screen bg-white text-zinc-900 antialiased">
    {/* NavBar */}
    <NavBar />
    <main>
      <HeroSection />
    </main>
  </div>;
};

export default App;
