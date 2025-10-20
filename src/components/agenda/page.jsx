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
      activity: "Kayıtlar ve Giriş",
      time: "8:30 - 9:00",
      title: ["Kayıtlar ve giriş"],
      details: ["Hall Gemini"],
    },
    {
      activity: "Açılış Konuşması",
      time: "9:00 - 9:15",
      title: ["Açılış Konuşması"],
      details: ["Hall Gemini"],
    },
    {
      activity:
        "Konuşmacı Oturumu 1 - Raheem Nasirudeen (Sorumlu AI Prensipleri, Neden, Ne ve Nasıl?)",
      time: "9:20 - 9:45",
      title: [
        "Raheem Nasirudeen - (Sorumlu AI Prensipleri, Neden, Ne ve Nasıl?)",
      ],
      details: ["Hall Gemini"],
    },
    {
      activity:
        "Konuşmacı Oturumu 2 - Feranmi Olowoyo (Topluluk Geliştiriciler Kariyerine Nasıl Etki Eder?)",
      time: "9:50 - 10:15",
      title: [
        "Feranmi Olowoyo - (Topluluk Geliştiriciler Kariyerine Nasıl Etki Eder?)",
      ],
      details: ["Hall Gemini"],
    },
    {
      activity: "Ana Konuşma - Seye Bandele, CEO, PaidHR",
      time: "10:20 - 10:50",
      title: ["Ana Konuşma - Seye Bandele, CEO, PaidHR"],
      details: ["Hall Gemini"],
    },
    {
      activity: "Ürün Demosu (Sponsorlar)",
      time: "10:50 - 11:00",
      title: ["Ürün Demosu (Sponsorlar)"],
      details: ["Hall Gemini"],
    },
    {
      activity: "Ağ Oluşturma",
      time: "11:00 - 11:20",
      title: ["Ağ Oluşturma"],
      details: ["Hall Gemini"],
    },
  ];

  return (
    <>
      {" "}
      <div className={Styles.container}>
        <main className={Styles.main}>
          <header className={Styles.header}>
            <h2 className={Styles.headerHeading}>Vaad Edilen Program</h2>
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
