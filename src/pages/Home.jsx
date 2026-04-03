import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SystemPreview from "../components/SystemPreview";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/layout/Footer";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SystemPreview />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
}
