import { useState } from "react";
import { Menu, X } from "lucide-react";
import FrontImage from "../assets/FrontImage.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Brand Soul", "Building For Bharat", "Learn with AG"];

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <img
          src={FrontImage}
          alt="Alkesh Gupta"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <nav className="absolute top-4 left-1/2 z-20 w-[96%] -translate-x-1/2 rounded-full bg-[#083C3B] px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-widest text-[#D8B76A]">
            ALKESH
          </h1>

          <ul className="hidden md:flex gap-10 text-sm font-medium text-white">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-yellow-300 transition"
              >
                {link}
              </li>
            ))}
          </ul>

          <button className="hidden md:block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-yellow-300">
            Work With Me
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {isOpen && (
          <div className="absolute top-20 left-1/2 z-20 w-[92%] -translate-x-1/2 rounded-2xl bg-[#083C3B] px-6 py-6 flex flex-col gap-5 md:hidden">
            <ul className="flex flex-col gap-5 text-sm font-medium text-white">
              {links.map((link) => (
                <li
                  key={link}
                  className="cursor-pointer hover:text-yellow-300 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </li>
              ))}
            </ul>
            <button
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Work With Me
            </button>
          </div>
        )}

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="max-w-3xl text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-[#D8B76A]">Alkesh Gupta</span> — a
            Founder,
            <br className="hidden sm:block" />
            Creator, and Soul Alchemist.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;