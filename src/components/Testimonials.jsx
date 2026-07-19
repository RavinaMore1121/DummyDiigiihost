import { motion } from "framer-motion";

import person1 from "../assets/Ellipse 1.png";
import person2 from "../assets/Ellipse 3.png";
import person3 from "../assets/Ellipse 4.png";
import person4 from "../assets/Ellipse 5.png";
import arrow from "../assets/Frame 16.png";

const testimonials = [
  {
    id: 1,
    quote: `"He Understands People — And That Changes Everything."`,
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    image: person1,
  },
  {
    id: 2,
    quote: `"Working With Alkesh Doesn't Feel Like Outsourcing. It Feels Like Building Together."`,
    name: "Suman Vyas",
    role: "Project Head, DiigiiHost",
    image: person2,
  },
  {
    id: 3,
    quote: `"He Never Talks About Trends. He Talks About Truth. And Somehow, That Always Works."`,
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    image: person3,
  },
  {
    id: 4,
    quote: `"Working Together Changed The Way We Think About Branding."`,
    name: "Rahul Shah",
    role: "Founder",
    image: person4,
  },
];

function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0B3B37]">
          What People Say
        </h2>

        <div className="overflow-hidden mt-10">
          <motion.div
            className="flex gap-10 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{
              animationPlayState: "paused",
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-[320px] md:w-[340px] shrink-0">
                <p className="text-gray-700 text-lg leading-8 min-h-[130px]">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-[#0B3B37]">{item.name}</h3>

                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-3 border rounded-full px-5 py-2 hover:shadow-lg transition">
            <div className="flex -space-x-3">
              {[person1, person2, person3, person4].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
              ))}
            </div>

            <span className="font-medium text-gray-700">More</span>

            <div className="w-9 h-9 rounded-full bg-[#0B3B37] flex items-center justify-center">
              <img src={arrow} alt="" />
            </div>
          </button>
        </div>
        <div className="border-b border-[#D9D9D9] mt-28"></div>
      </div>
    </section>
  );
}

export default Testimonials;
