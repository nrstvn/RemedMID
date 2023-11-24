import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Service from "../components/Service";
const Homepages = () => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Portofolio />
      <Header />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepages;
