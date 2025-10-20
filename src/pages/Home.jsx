import DevfestHero from "../components/DevfestHero";
import CountDown from "../components/CountDown";
import OurSpeakers from "../components/OurSpeakers";
import OurSponsors from "../components/OurSponsors";
import Recap from "../components/Recap";
import Agenda from "../components/agenda/page";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            window.scrollBy(0, -80); // Navbar yüksekliği kadar yukarı scroll yap
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return (
    <div className="w-full">
      {/* Website Banner */}
      <div id="home">
        <DevfestHero />
      </div>

      <div id="schedule">
        <CountDown />
      </div>

      <div id="speakers">
        <OurSpeakers />
      </div>

      {/* <div id="agenda">
        <Agenda />
      </div> */}

      <div id="sponsors">
        <OurSponsors />
      </div>

      <div id="recap">
        <Recap />
      </div>
    </div>
  );
};

export default Home;
