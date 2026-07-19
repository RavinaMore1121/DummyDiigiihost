import { motion } from "framer-motion";

import img1 from "../assets/Rectangle 441.png";

function Brands() {
  const brands = [
    {
      image: img1,
      title: "DiigiiHost",
      desc: "Making Digital Affordable And Human For Small Businesses",
    },
    {
      title: "Best Rate Websites",
      desc: "Making Digital Affordable And Human For Small Businesses",
    },
    {
      title: "Anuyed",
      desc: "Rediscovering Purity Through Devotion",
    },
    {
      title: "Soupherb",
      desc: "Reimagining Wellness With Purpose",
    },
    {
      title: "NM Fest",
      desc: "Giving A City Its Identity, Its Pride, And Its Global Identity.",
    },
    {
      title: "Combo Jumbo & CoJ",
      desc: "Transforming Restaurants Into Communities Built On Togetherness.",
    },
    {
      title: "Learn & Achieve",
      desc: "Turning Fragmented Learning Into A Nationwide Education.",
    },
    {
      title: "Akirhs",
      desc: "Where Deep Tech Finds Its Voice.",
    },
    {
      title: "NAFSCOB",
      desc: "A Clear Voice That Finds Its Value.",
    },
    {
      title: "HEFT",
      desc: "Transforming Heavy-Lifting Certification Into A 30-Day Journey.",
    },
    {
      title: "World Flair",
      desc: "Creating Global Opportunities.",
    },
    {
      title: "Dr. Gaikwad",
      desc: "Proof That Science, Design, And Soul Can Coexist.",
    },
    {
      title: "Loma Dental",
      desc: "Proof That Science, Design, And Soul Can Coexist.",
    },
  ];

  return (
    <section className="bg-white py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden space-y-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {" "}
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-anton text-4xl sm:text-5xl md:text-7xl lg:text-[96px] font-extrabold text-[#052C27] text-left pb-4 px-4 sm:px-8 md:px-20 lg:px-32"
            >
              The Stronger The Soul
            </motion.h2>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-anton text-4xl sm:text-5xl md:text-7xl lg:text-[96px] font-extrabold text-[#052C27] text-right pb-4 px-4 sm:px-8 md:px-20 lg:px-32"
            >
              The Stronger The Brand
            </motion.h2>
          </motion.div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-5xl font-altone text-[#052C27]">
            Brands That Carry My Soul
          </h3>

          <p className="text-400 font-altone mt-2 text-[#5C5C5C]">
            Over the years, I've had the privilege of helping founders build
            businesses that feel deeply human.
          </p>
        </div>

        <div className="w-full mt-16 border-t border-[#D9D9D9]">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-8 border-b border-[#D9D9D9] py-4 hover:bg-gray-50 transition"
            >
              <div className="w-30 h-24 flex-shrink-0">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="w-full h-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full h-full"></div>
                )}
              </div>

              <div className="flex-1">
                <h2 className="font-anton text-4xl font-bold text-[#284744]">
                  {brand.title}
                </h2>

                <p className="text-gray-500 mt-2 text-[#5C5C5C]">
                  {brand.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
