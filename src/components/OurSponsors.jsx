import { ArrowUpRight } from "lucide-react";
import google from "../assets/sponsors/google.webp";
import club from "../assets/sponsors/100sclub.png";
import BlsmProfesyoneller from "../assets/sponsors/logo1.png";
import dceros from "../assets/sponsors/logo2.png";
import raghubs from "../assets/sponsors/logo3.png";
import jraf from "../assets/sponsors/logo4.png";
import techcareer from "../assets/sponsors/logo5.jpeg";
import workc from "../assets/sponsors/logo6.png";
import youthall from "../assets/sponsors/logo7.png";
import uzmanBlgtekno from "../assets/sponsors/logo8.jpeg";
import epam from "../assets/sponsors/logo9.jpeg";
import bgaBlsm from "../assets/sponsors/logo10.jpeg";
import talya from "../assets/sponsors/logo_1.png";
import rekt from "../assets/sponsors/logo_2.png";
import tornet from "../assets/sponsors/logo_3.jpeg";
import kafagenc from "../assets/sponsors/logo_4.png";
import gez from "../assets/sponsors/logo_5.jpg";
import gam from "../assets/sponsors/logo_6.jpeg";
import bnbn from "../assets/sponsors/logo_7.png";
import pacadem from "../assets/sponsors/logo_8.png";
import log from "../assets/sponsors/logo11.png";
import { Button } from "../module/components/ui/button";
import { cn } from "../module/lib/utils";

function SponsorImage({ imageSrc, alt, divClassName, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`${divClassName} hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
      >
        <img
          src={imageSrc}
          alt={alt}
          className={cn("h-full object-center object-contain")}
        />
      </div>
    </a>
  );
}

const OurSponsors = () => {
  return (
    <div className="bg-[#fcfcfc]">
      <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80 px-24">
        <div className="container flex flex-col gap-52">
          <div className="w-full flex md:flex-row flex-col gap-3 items-center justify-between">
            <div>
              <h1 className="font-bold text-xl md:text-5xl">Sponsorlarımız</h1>
              <p className="font-medium text-base pt-3 md:text-xl">
                Mevcut sponsorlarımızla tanışın
              </p>
            </div>
            <a
              href="https://forms.gle/fp8LpFsuFE8rn8Re8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-sm md:text-xl rounded-[100px] bg-black text-white hover:bg-core-blue hover:border border-solid border-black px-20 md:px-52 py-4 md:py-10 flex items-center">
                Sponsor Olmak İçin Başvuru Yap <ArrowUpRight />
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 overflow-hidden">
            <SponsorImage
              imageSrc={epam}
              link="https://www.epam.com/"
              alt="epam"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={techcareer}
              alt="techcareer"
              link="https://www.techcareer.net/"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={youthall}
              link="https://www.youthall.com/en/"
              alt="youthall"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={raghubs}
              alt="ragHubs"
              link="https://app.raghubs.com/?lang=tr"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={uzmanBlgtekno}
              link="https://www.uzmanbt.com/"
              alt="uzman bilşim teknolojileri"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={log}
              link="https://logelektronik.com/"
              alt="log elektronik"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={BlsmProfesyoneller}
              alt="bilisim profesonelleri"
              link="https://bilisimprofesyonelleri.com/"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={bgaBlsm}
              link="https://www.antalyabigabilisim.com/"
              alt="biga bilişim"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={dceros}
              alt="Dıceros"
              link="https://diceroscraft.com/"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={workc}
              link="https://workc.co/"
              alt="OneApp"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={jraf}
              alt="jiraf coffee book"
              link="https://www.instagram.com/jirafcoffeebook/"
              imgClassName="w-[150px] md:w-[250px]"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={club}
              alt="100sclub"
              link="https://100sclub.com/en"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={google}
              link="https://gdg.community.dev/"
              alt="google"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
          </div>

          <div className="">
            <h1 className="font-bold text-xl md:text-3xl pb-5">
              Geçmiş sponsorlarımız
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-24 overflow-hidden">
              <SponsorImage
                imageSrc={epam}
                alt="epam"
                link="https://www.epam.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={techcareer}
                alt="techcareer"
                link="https://www.techcareer.net/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={youthall}
                link="https://www.youthall.com/en/"
                alt="youthall"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={pacadem}
                alt="piksel akademi"
                link="https://pikselakademi.com.tr/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={bnbn}
                alt="binbin"
                link="https://www.binbin.tech/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={rekt}
                alt="rekt studio"
                link="https://rektstudios.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={gam}
                alt="gamFed"
                link="https://www.instagram.com/gamfedturkey/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={BlsmProfesyoneller}
                alt="bilişim profesyonelleri"
                link="https://bilisimprofesyonelleri.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={gez}
                alt="gez"
                link="https://gezmobility.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={talya}
                alt="talya"
                link="https://talyakizyurdu.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={tornet}
                alt="tornet"
                link="https://www.tornetteknoloji.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={kafagenc}
                alt="kafa gençlik"
                link="https://www.instagram.com/kafagenclik/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={dceros}
                alt="diceros"
                link="https://diceroscraft.com/"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                link="https://gdg.community.dev/"
                alt="google"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
