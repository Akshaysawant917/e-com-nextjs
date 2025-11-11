import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Showcase from "../components/Showcase";
// import CTA from "./components/CTA";

import BannerCard from "../components/BannerCard";
import CategoriesGrid from "../components/CategoriesGrid";
import FlashDeals from "../components/FlashDeals";

export default function Home() {
  return (
    <main>
      {/* <MobileNavbar cartCount={2} /> */}
      <BannerCard />
      <CategoriesGrid />
      <FlashDeals />
      {/* <Hero />
      <Highlights />
      <Showcase /> */}
    </main>
  );
}
