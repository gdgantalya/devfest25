import { ArrowUpRight } from "lucide-react";
import IconsArt from "./IconsArt";

import { useRef, useEffect } from "react";

const DevfestHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  return (
    <>
      <main ref={sectionRef} className="pt-[150px] bg-white">
        <div className="w-full md:max-w-[1500px] mx-auto relative z-10">
          <header className="container headers flex gap-4 md:gap-7 flex-col items-center justify-between">
            <h1 className="font-bold text-[2rem] leading-[2.5rem] md:text-8xl">
              Devfest&apos;25 Antalya
            </h1>
            <p className="text-[#4D4D4D] text-lg md:text-2xl text-center md:w-[1000px]">
              Merhaba! Antalya&apos;daki en büyük GDG etkinliğinin bir parçası
              ol. Teknoloji meraklılarının bir araya geldiği, son teknolojileri
              keşfettiği ve geleceği şekillendirdiği etkinliğe katıl
            </p>
            <p className="text-center font-bold">6 Aralık 2025, Cumartesi</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm'">
              <a
                href="https://kommunity.com/gdg-antalya/events/devfest25-antalya-badb022e"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black py-4 px-52 text-white hover:bg-core-blue hover:text-white rounded-[100px] flex"
              >
                Bilet Al <ArrowUpRight />
              </a>

              <a
                href="#speakers"
                className="bg-white py-4 px-52 border-[1px] border-black hover:border-core-blue text-black hover:bg-core-blue hover:text-white rounded-[100px]"
              >
                Konuşmacıları Gör
              </a>
            </div>
          </header>
        </div>
        <IconsArt className="flex flex-col -mt-64 md:-mt-[150px]" />
      </main>
    </>
  );
};

export default DevfestHero;
