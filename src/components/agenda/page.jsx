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
      activity: "Konuşma 1",
      time: "09:30 - 10:00",
      title: ["Konuşma 1"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 2",
      time: "10:15 - 10:45",
      title: ["Konuşma 2"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 3",
      time: "11:00 - 11:30",
      title: ["Konuşma 3"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 4",
      time: "11:45 - 12:15",
      title: ["Konuşma 4"],
      details: ["Ana Salon"],
    },
    {
      activity: "Öğle Arası",
      time: "12:15 - 12:55",
      title: ["Öğle Arası"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 5",
      time: "12:55 - 13:25",
      title: ["Konuşma 5"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 6",
      time: "13:40 - 14:10",
      title: ["Konuşma 6"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 7",
      time: "14:25 - 14:55",
      title: ["Konuşma 7"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 8",
      time: "15:10 - 15:40",
      title: ["Konuşma 8"],
      details: ["Ana Salon"],
    },
    {
      activity: "Konuşma 9",
      time: "15:55 - 16:25",
      title: ["Konuşma 9"],
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
