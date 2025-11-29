import { listings } from "../assets/data"
import ListingCard from "./ListingCard"

const FeaturedListings = () => {
  return (
    <section id="spaces" className="max-w-7xl mx-auto px-6 pb-24">
      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing,index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      {/* Btn */}
      <div className="text-center mt-16">
        <button className="text-lg font-medium text-zinc-50 border-b-2 bg-rose-500 py-4 px-6 rounded-full cursor-pointer hover:bg-transparent border-2 border-transparent hover:text-zinc-600 hover:border-zinc-500 transition-all duration-200 ease-in">
          Browse All Homes
        </button>
      </div>
    </section>
  )
}

export default FeaturedListings