import cube from "../assets/Rectangle 463.png";
import founder2 from "../assets/Rectangle 464.png";
import team from "../assets/Rectangle 465.png";

function BrandSoulManifesto() {
  return (
    <section className="bg-[#052C27] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 lg:px-30">
        <h3 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-14 md:mb-20">
          The Brand Soul Manifesto
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 px-20">
          <img
            src={cube}
            alt=""
            className="w-40 sm:w-56 md:w-72 rounded-lg shadow-lg shrink-0"
          />

          <div className="text-xl sm:text-2xl md:text-[40px] font text-gray-400 leading-[1.15] text-center md:text-left">
            <div className="md:ml-36">
              A <span className="font-bold">BRAND</span> is
            </div>
            <div className="md:ml-[104px]">not a logo.</div>
            <div className="md:ml-16">It's a living system</div>
            <div className="md:ml-6">of emotion</div>
            <div className="md:ml-0">and intention.</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-30 mt-16 md:mt-28 px-20">
          <div className="order-2 md:order-1 text-xl sm:text-2xl md:text-[40px] font text-gray-400 leading-[1.15] text-center md:text-left">
            <div className="md:ml-0">
              A<span className="font-bold"> FOUNDER </span>Is{" "}
            </div>
            <div className="md:ml-4">Not A Title.</div>
            <div className="md:ml-6">It's The Discipline</div>
            <div className="md:ml-12">To Build</div>
            <div className="md:ml-16">What Others Only</div>
            <div className="md:ml-20">Imagine.</div>
          </div>

          <img
            src={founder2}
            alt=""
            className="order-1 md:order-2 w-40 sm:w-56 md:w-72 rounded-lg shrink-0"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-16 md:mt-28 px-20">
          <img
            src={team}
            alt=""
            className="w-40 sm:w-56 md:w-72 rounded-lg shrink-0"
          />

          <div className="text-xl sm:text-2xl md:text-[40px] font text-gray-400 leading-[1.15] text-center md:text-left">
            <div className="md:ml-48">
              And
              <span className="font-bold">
                {" "}
                <b>BUSINESS</b>{" "}
              </span>
              Is{" "}
            </div>
            <div className="md:ml-[152px]">Not About The Market</div>
            <div className="md:ml-28">It's About</div>
            <div className="md:ml-[72px]">The Value</div>
            <div className="md:ml-8">You Choose To Create,</div>
            <div className="md:ml-0">Consistently</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandSoulManifesto;
