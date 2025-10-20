import { useEffect, useState } from "react";

const CountDown = () => {
  // Hedef tarih (6 Aralık 2025)
  const targetDate = new Date("2025-12-06T00:00:00Z").getTime();

  // Initialize state variables for the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const oneSecond = 1000;
        const oneMinute = oneSecond * 60;
        const oneHour = oneMinute * 60;
        const oneDay = oneHour * 24;

        setDays(Math.floor(timeDifference / oneDay));
        setHours(Math.floor((timeDifference % oneDay) / oneHour));
        setMinutes(Math.floor((timeDifference % oneHour) / oneMinute));
        setSeconds(Math.floor((timeDifference % oneMinute) / oneSecond));
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);
  return (
    <>
      <div className="bg-pastel-red">
        <div className="w-full md:max-w-[1500px] mx-auto ">
          <div className="container flex flex-col md:flex-row justify-between items-center py-48 gap-5">
            <div className="w-full md:w-1/3 ">
              <h1 className="font-bold text-3xl text-center md:text-left md:text-6xl">
                Sizi bekliyoruz
              </h1>
            </div>
            <div className="w-full md:w-fit flex flex-row gap-2 md:gap-3">
              <div className="py-2 px-4 md:py-5 md:px-7 rounded-2xl bg-halftone-blue flex flex-col items-center justify-center">
                <p className="font-bold text-3xl md:text-5xl">
                  {days.toString().padStart(2, "0")}
                </p>
                <span className="font-thin text-sm md:text-2xl">Gün</span>
              </div>
              <div className="py-2 px-4 md:py-5 md:px-7 rounded-2xl bg-halftone-red flex flex-col items-center justify-center">
                <p className="font-bold text-3xl md:text-5xl">
                  {hours.toString().padStart(2, "0")}
                </p>
                <span className="font-thin text-sm md:text-2xl">Saat</span>
              </div>
              <div className="py-2 px-4 md:py-5 md:px-7 rounded-2xl bg-halftone-green flex flex-col items-center justify-center">
                <p className="font-bold text-3xl md:text-5xl">
                  {minutes.toString().padStart(2, "0")}
                </p>
                <span className="font-thin text-sm md:text-2xl">Dakika</span>
              </div>
              <div className="py-2 px-4 md:py-5 md:px-7 rounded-2xl bg-halftone-yellow flex flex-col items-center justify-center">
                <p className="font-bold text-3xl md:text-5xl">
                  {seconds.toString().padStart(2, "0")}
                </p>
                <span className="font-thin text-sm md:text-2xl">Saniye</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
