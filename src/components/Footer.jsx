import logo from '../assets/alkeshsirlogo 2.png';

function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-10 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row justify-between">

          <div className="mb-12 lg:mb-0">

            <h2 className="text-[#D8C06A] text-3xl md:text-3xl leading-tight font-medium max-w-sm">
              Maybe it's time we build
              <br />
              something together.
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-lg">

            <div className="space-y-4">

              <a
                href="#about"
                className="block hover:text-[#D8C06A] transition"
              >
                about
              </a>

              <a
                href="#services"
                className="block hover:text-[#D8C06A] transition"
              >
                services
              </a>

              <a
                href="#contact"
                className="block hover:text-[#D8C06A] transition"
              >
                contact
              </a>

            </div>

            <div className="space-y-4">

              <a href="#" className="block hover:text-[#D8C06A] transition">
                diigiihost
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                quote your price
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                best rate websites
              </a>

            </div>

            <div className="space-y-4">

              <a href="#" className="block hover:text-[#D8C06A] transition">
                instagram
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                facebook
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                youtube
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                linkedin
              </a>

              <a href="#" className="block hover:text-[#D8C06A] transition">
                X
              </a>

            </div>

          </div>

        </div>

        <div className="mt-28 flex flex-col md:flex-row justify-between items-center gap-8">

          <img
            src={logo}
            alt="Alkesh"
            className="w-60 md:w-72"
          />

          <p className="text-sm text-gray-300 text-center md:text-right">

            Copyright © 2026 Alkesh Gupta. All Rights Reserved.
            Powered By : DIIGIIHOST

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;