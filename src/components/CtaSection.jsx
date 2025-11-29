import { urlCTA } from "../assets/data" 

const CtaSection = () => {
  return (
    <section className="bg-rose-600 rounded-[30px] py-12 lg:py-16 mb-24 max-w-7xl mx-auto px-2 lg:px-6 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white p-6 md:p-12">
            {/* Left image */}
            <div className="relative aspect-square bg-zinc-800 rounded-xl overflow-hidden">
                <div 
                style={{
                    backgroundImage:`url(${urlCTA})`
                }}
                className="absolute inset-0 flex items-center justify-center text-zinc-100 bg-cover bg-center saturate-130 text-lg"></div>
            </div>
            {/* Right content */}
            <div className="lg:pl-12">
                <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                    We Have Homes for Any Family Size
                </h2>
                <p className="text-zinc-200 text-lg mb-8">
                    No matter how many people you need to accommodate, we have over 2000+ properties ready to be rented.
                </p>
                <button className="bg-white text-zinc-900 px-8 py-4 rounded-full hover:text-white cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-zinc-200 transition-colors font-medium text-lg">
                    Explore Homes
                </button>
            </div>
        </div>
    </section>
  )
}

export default CtaSection