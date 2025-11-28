import { MapPin } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[95vh] bg-zinc-900 overflow-hidden rounded-b-[40px] shadow-none">
        {/* Background Image */}

        <div className="absolute inset-0 bg-zinc-700 bg-cover bg-center opacity-60">
            <div className="absolute inset-0 bg-zinc-300 opacity-20"></div>
            <div className="absolute inset-0 bg-zinc-300 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center text-zinc-100 bg-[url(/images/house-ruu.png)] bg-cover bg-center saturate-150 text-lg"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col h-full">
            <div className="flex-grow flex flex-col justify-center items-center lg:justify-start lg:items-start text-white pb-16 lg:px-10 pt-16">
                <h1 className="text-7xl text-white/90 lg:text-[200px] font-extrabold mb-4 relative">
                    CeyNest <div className="absolute p-2 px-4 -top-10 lg:top-0 -right-4 text-lg font-normal rounded-full border border-zinc-100 animate-border">2026</div>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold grad-text from-white to-zinc-400 mb-8 -mt-6">
                    Find Your Next Rental Home
                </h2>
                <p className="text-lg text-center lg:text-left text-zinc-300 mb-10">
                    Find & Make your interior ready. <br className="md:hidden" /> stand out from the box.
                </p>
                {/* Search Bar */}
                <div className="bg-white p-4 rounded-xl lg:rounded-full flex flex-col md:flex-row items-center space-y-4 md:space-y-o md:space-x-4 w-full max-w-fit">
                    {/* Locations */}
                    <div className="flex items-center space-x-2 border-r border-zinc-200 pr-4 w-full md:w-auto">
                        <MapPin size={20} className="text-zinc-500" />
                        <input type="text" placeholder="Locations" className="flex-grow outline-none text-zinc-800 placeholder-zinc-500 text-base" />
                    </div>
                    {/* Number 0f Guests */}
                    {/* House Type */}
                    {/* Search Btn */}
                </div>
            </div>
        </div>
        </section>
  )
}

export default HeroSection