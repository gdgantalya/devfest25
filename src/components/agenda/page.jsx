import { Fragment, useState, useEffect } from "react";
import { agendaClass as Styles } from "./agenda";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../module/components/accordion";
import { generateRandomColors } from "../../module/lib/utils";
import { Calendar } from "../../module/icons";
import IconsArt from "../IconsArt";

export default function Agenda() {
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [buttonColors, setButtonColors] = useState([]);

  useEffect(() => {
    const accordionItems = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23,
    ];
    const accordionContentColors = ["#CCF6C5", "#FFE7A5", "#F8D8D8", "#C3ECF6"];
    const accordionButtonColors = ["#FF7DAF", "#4285F4", "#FFD427", "#5CDB6D"];

    setBackgroundColors(
      generateRandomColors({
        accordionButtonColors,
        accordionContentColors,
        accordionItems,
        setButtonColors,
      })
    );
  }, []);

  const agendaItems = [
    {
      activity: "Açılış",
      time: "09:00 - 09:30",
      title: ["Açılış"],
      details: ["Ana Salon"],
    },
    {
      activity: "Integrating Gemma into RAG Pipelines",
      time: "09:30 - 10:00",
      title: ["Rümeysa Kara"],
      subtitle: ["Data Scientist, Google Developer Expert for AI/ML, Yepaş"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "10:00 - 10:15",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "Junior 2.0: Yapay Zekâ Çağında Yeni Mezun Yazılımcı Olmak",
      time: "10:15 - 10:45",
      title: ["Ugur Umutluoğlu"],
      subtitle: ["Founder, Talentops"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "10:45 - 11:00",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "Why Great Engineers Still Build Fragile Systems",
      time: "11:00 - 11:30",
      title: ["Alper Hankendi"],
      subtitle: ["Head of Technology, Hepsiburada"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "11:30 - 11:45",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "Building Data Platforms from Scratch",
      time: "11:45 - 12:15",
      title: ["Halil İbrahim Yıldırım"],
      subtitle: ["Head of Data, Data & AI Leader, ex: TOM, Getir"],
      details: ["Ana Salon"],
    },
    {
      activity: "Öğle Arası",
      time: "12:15 - 12:55",
      title: ["Öğle Arası"],
      details: ["Ana Salon"],
    },
    {
      activity: "KonuşmaAI Agent Development 5",
      time: "12:55 - 13:25",
      title: ["Emre Savcı"],
      subtitle: ["Tech Lead / Staff Engineer, Trendyol Group"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "13:25 - 13:40",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "Being Developer at AI Era",
      time: "13:40 - 14:10",
      title: ["Semih Kışlar"],
      subtitle: ["Tech Culture & AI Enablement Manager, Teknasyon"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "14:10 - 14:25",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "The Courage to git push --force on a Friday: The Art of Writing Non-Fragile Code",
      time: "14:25 - 14:55",
      title: ["Evren Tan"],
      subtitle: ["Senior Software Development Manager, Sahibinden"],
      details: ["Ana Salon"],
    },
    {
      activity: "Ara",
      time: "14:55 - 15:10",
      title: ["Ara"],
      details: ["Ana Salon"],
    },
    {
      activity: "Create, Swap, Share: Real-Time AI Features with Flutter",
      time: "15:10 - 15:40",
      title: ["Gizem Malçok"],
      subtitle: ["Founder, Senior Flutter Developer, Freesia AI"],
      details: ["Ana Salon"],
    },
  ];

  return (
    <>
      <div className={Styles.container}>
        <main className={Styles.main}>
          <header className={Styles.header}>
            <h2 className={Styles.headerHeading}>Program</h2>
            <section className={Styles.dateContainer}>
              <Calendar />
              <p className={Styles.date}>
                6 Aralık 2025, Cumartesi - Sabah 8:00'den başlayarak bize
                katılın
              </p>
            </section>
            <p className={Styles.headerText}>
              Takviminizdeki bu günü{" "}
              <span className={Styles.inspirationText}>ilham,</span>{" "}
              <span className={Styles.innovationText}>yenilik</span> ve{" "}
              <span className={Styles.connectionText}>bağlantı</span> ile
              doldurmak için işaretleyin.
            </p>
          </header>
          <section>
            <Accordion
              type="single"
              collapsible
              className="max-w-[1000px] mx-auto"
            >
              {agendaItems.map((item, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={Styles.accordionItem}
                    style={{ backgroundColor: backgroundColors[index] }}
                  >
                    <AccordionTrigger className={Styles.accordionTrigger}>
                      {item.time}: {item.activity}
                    </AccordionTrigger>
                    <AccordionContent
                      className={Styles.accordionContentContainer}
                    >
                      <section key={index} className={Styles.accordionContent}>
                        {item.title && (
                          <div className="flex flex-col gap-6 w-[80%]">
                            {item.title.map((titles, i) => (
                              <p
                                key={i}
                                className={Styles.accordionContentTitle}
                              >
                                {titles}
                              </p>
                            ))}
                            {item.subtitle && (
                              <p className="text-sm text-gray-500 mt-[1px] border-b border-black pb-1">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        )}
                        {item.details && (
                          <div className="flex flex-col gap-4 lg:w-[12%] w-[30%] font-bold">
                            {item.details.map((detail, i) => (
                              <button
                                key={i}
                                style={{ backgroundColor: buttonColors[index] }}
                                className={Styles.accordionContentButton}
                              >
                                {detail}
                              </button>
                            ))}
                          </div>
                        )}
                      </section>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </section>
        </main>
      </div>
      <IconsArt className="" showFull={false} />
    </>
  );
}

// export default Agenda;
