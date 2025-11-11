// /app/about/page.jsx
import AboutHero from "../../components/about/AboutHero";
import AboutValues from "../../components/about/AboutValues";
import AboutProcess from "../../components/about/AboutProcess";
import AboutTeam from "../../components/about/AboutTeam";
import AboutCTA from "../../components/about/AboutCTA";

export default function about() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutProcess />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}
