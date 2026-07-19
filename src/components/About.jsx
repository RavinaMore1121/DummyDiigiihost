import person1 from "../assets/nafscob1.png";
import person2 from "../assets/Soupherb1.png";
import person3 from "../assets/Anuved1.png";
import person4 from "../assets/bni1.png";
import person5 from "../assets/Dr.-Gaikwad1.png";

import soul from "../assets/Brand-identity-setup-1.png";
import science from "../assets/Digital-infrastructure.png";
import scale from "../assets/Image-re-engineering.png";

import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            What began as a small digital agency slowly evolved into a place
            where we didn't just design websites or logos...
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-[#0C3B36]">
            we understood people.
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 flex justify-center gap-5 flex-wrap"
        >
          {[person1, person2, person3, person4, person5].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              variants={itemVariants}
              className="w-52 h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          ))}
        </motion.div>

        <div className="mt-28 text-center">
          <p className="text-2xl text-gray-600">
            And somewhere along that path, the idea that defined everything
            <br />I do was born
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#0C3B36]">
            The Brand Soul Philosophy.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20 flex justify-center gap-8 flex-wrap"
        >
          {" "}
          <motion.img
            variants={itemVariants}
            src={soul}
            alt="Soul"
            className="w-72 rounded-xl shadow-xl hover:-translate-y-2 transition duration-300"
          />
          <motion.img
            variants={itemVariants}
            src={science}
            alt="Science"
            className="w-72 rounded-xl shadow-xl hover:-translate-y-2 transition duration-300"
          />
          <motion.img
            variants={itemVariants}
            src={scale}
            alt="Scale"
            className="w-72 rounded-xl shadow-xl hover:-translate-y-2 transition duration-300"
          />
        </motion.div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Because every brand, just like every human, has a soul. When you
            find it, align with it, and express it with integrity —
            <span className="font-bold text-[#0C3B36]">
              {" "}
              it creates movement.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
