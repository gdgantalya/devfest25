import { ArrowUpRight } from "lucide-react";
import { Button } from "../module/components/ui/button";
import { SpeakersList } from "../module/data/speakers-list";
import { Fragment } from "react";
import SpeakerCard from "../module/cards/SpeakerCard";
import IconsArt from "./IconsArt";

const OurSpeakers = () => {
  const Speakers = SpeakersList.slice(0, 12);
  return (
    <>
      <div className="bg-[#fcfcfc] w-full">
        <div className="w-full md:max-w-[1500px] mx-auto py-32 md:py-80">
          <div className="container flex flex-col gap-5 md:gap-52">
            <h1 className="text-2xl md:text-6xl font-bold">
              Harika Konuşmacılarımızı Tanıyın
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-24">
              {Speakers.map((data, idx) => (
                <Fragment key={idx}>
                  <SpeakerCard {...data} />
                </Fragment>
              ))}
            </section>

            {/* <section className="flex gap-5 flex-col items-center py-24">
              <h1 className="text-5xl font-bold text-center">
                Konuşmacılar Yakında Gelecek
              </h1>
              <p className="text-xl font-extralight text-[#4D4D4D] md:w-[820px] text-center">
                Konuşmacı kadromuz yakında duyurulacak! Endüstri liderleri,
                teknoloji inovasyoncuları ve yaratıcı düşünürülerin sizi ilham
                verdiği ve DevFest deneyiminizi dönüştürdüğü anı beklemeye
                hazırlanın.
              </p>
            </section> */}
          </div>
        </div>
        <IconsArt className="flex flex-col -mt-64 md:-mt-[150px]" />
      </div>
    </>
  );
};

export default OurSpeakers;
