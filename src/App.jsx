import "./App.css";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey";
import About from "./components/About";
import Brands from "./components/Brands";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AgThough from "./components/AgThough";
import Founder from "./components/Founder";
import BrandSoulManifesto from "./components/BrandSoulManifesto";

function App() {
  return (
    <>
      <Navbar />
      <Journey />
      <About />
      <Brands />
      <Founder />
      <BrandSoulManifesto />
      <Testimonials /> 
      <Mission />
      <AgThough/>
      <Footer />
    </>
  );
}

export default App;
