import SoulStory from "../assets/Frame341.png";

function AgThough() {
  return (
    <section className="bg-white py-4">
      <div className="max-w-[1200px] mx-auto px-2 md:px-2">
        <img
          src={SoulStory}
          alt="Soul Story"
          className="w-full aspect-[2/1] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}

export default AgThough;