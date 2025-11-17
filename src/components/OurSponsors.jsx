import { ArrowUpRight } from "lucide-react";
import google from "../assets/sponsors/google.webp";
import club from "../assets/sponsors/100sclub.png";
import BlsmProfesyoneller from "../assets/sponsors/logo1.png";
import dceros from "../assets/sponsors/logo2.png";
import raghubs from "../assets/sponsors/logo3.png";
import jraf from "../assets/sponsors/logo4.png";
import techcareer from "../assets/sponsors/logo5.jpeg";
import workc from "../assets/sponsors/logo6.png";
import { Button } from "../module/components/ui/button";
import { cn } from "../module/lib/utils";

function SponsorImage({ imageSrc, alt, divClassName }) {
  return (
    <div
      className={`${divClassName} hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
    >
      <img
        src={imageSrc}
        alt={alt}
        className={cn("h-full object-center object-contain")}
      />
    </div>
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
              imageSrc={club}
              alt="Google"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={BlsmProfesyoneller}
              alt="Codemagic"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={dceros}
              alt="Ton Society"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={raghubs}
              alt="Interswitch"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={jraf}
              alt="Github Campus"
              imgClassName="w-[150px] md:w-[250px]"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={techcareer}
              alt="Lorry Project"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
            <SponsorImage
              imageSrc={workc}
              alt="OneApp"
              divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
            />
          </div>

          <div className="">
            <h1 className="font-bold text-xl md:text-3xl pb-5">
              Geçmiş sponsorlarımız
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-24 overflow-hidden">
              <SponsorImage
                imageSrc={google}
                alt="Turing"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="AltSchool"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="Cardify"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="DigitalOcean"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="YouVerify"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="Heyfood"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="Ship"
                divClassName="bg-white p-5 md:p-10 border-[1px] border-[#f0f0f0] rounded-2xl h-[100px] md:h-[200px]"
              />
              <SponsorImage
                imageSrc={google}
                alt="Halal"
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
