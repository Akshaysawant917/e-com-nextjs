import Highlights from "../components/home/Highlights";
import Showcase from "../components/home/Showcase";
import BannerCard from "../components/home/BannerCard";
import CategoriesGrid from "../components/home/CategoriesGrid";
import FlashDeals from "../components/home/FlashDeals";
import MostSelling from "../components/home/MostSelling";

export default function Home() {
  return (
    <main>
      <BannerCard />
      <CategoriesGrid />
      <FlashDeals />
      <Highlights />
      <MostSelling />
      <Showcase />
    </main>
  );
}
  