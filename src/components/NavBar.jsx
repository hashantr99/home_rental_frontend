import { HousePlusIcon } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = ["About", "Spaces", "Location", "Contact"]

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

  return (
    <header className={`fixed top-5 left-1/2 -translate-x-2 z-50 translate-all duration-300 ease-in rounded-full text-zinc-800 shadow-lg ${isScrolled ? "h-14 bg-zinc-200/40 backdrop-blur-xl border border-white/10 scale-95 w-[85%] max-w-4xl" : "h-14 bg-zinc-100 w-[90%] max-w-5xl"} px-6 flex items-center justify-between`}>
      {/* Left Nav links */}
      <div className="hidden md:flex gap-8 font-medium text-sm">
        {navLinks.map((item) => (
          <a  
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:-translate-y-0.5 hover:uppercase hover:text-rose-600 hover:font-bold transition-all duration-200 ease-in-out">
            {item}
          </a>
        ))}
      </div>

{/* Logo */}
<div className="text-2xl cursor-pointer text-rose-600 font-extrabold tracking-absolute left-1/2 transform -translate-x-1/2 centered-row gap-2">
<HousePlusIcon/> CeyNest <sup className="font-normal -ml-2">®</sup>
</div>

{/* Right buttons */}
<div className="flex items-center space-x-4"></div>
    </header>
  )
}

export default NavBar