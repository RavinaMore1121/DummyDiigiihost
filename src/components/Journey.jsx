import diigiiHost from "../assets/DiigiiHost.png";
import { motion } from "framer-motion";

function Journey() {
  return (
    <section className="bg-white py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-5xl font-semibold text-[#0d3b36] leading-tight max-w-3xl"
        >
          My journey didn't start with a business plan
          <br />
          It started with questions
        </motion.h2>
        <div className="border-b border-[#D9D9D9] mt-6 mb-12"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div></div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="space-y-8"
          >
            {" "}
            <p className="text-xl text-gray-700">
              Why do some brands connect deeply while others don't?
            </p>
            <p className="text-xl text-gray-700">
              Why do some founders feel aligned, while others burn out chasing
              trends?
            </p>
          </motion.div>
        </div>

        <div className="mt-24">
          <img
            src={diigiiHost}
            alt="office image"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Journey;
