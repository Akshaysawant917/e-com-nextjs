import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Showcase />
        {/* <CTA /> */}
      <Footer />
    </main>
  );
}
