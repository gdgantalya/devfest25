import { useEffect, useState } from "react";

export default function CountdownTimer() {
    const targetDate = Date.UTC(2025, 11, 6, 14, 30, 0);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(distance / (1000 * 60 * 60)),
                    minutes: Math.floor((distance / (1000 * 60)) % 60),
                    seconds: Math.floor((distance / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-white shadow-lg mx-auto max-w-9xl z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 text-center">
                <div className="p-8">
                    <p className="text-4xl font-bold text-gray-800">{timeLeft.days}</p>
                    <p className="text-xs tracking-widest text-gray-500 mt-2">DAYS</p>
                </div>
                <div className="p-8">
                    <p className="text-4xl font-bold text-gray-800">{timeLeft.hours}</p>
                    <p className="text-xs tracking-widest text-gray-500 mt-2">HOURS</p>
                </div>
                <div className="p-8">
                    <p className="text-4xl font-bold text-gray-800">{timeLeft.minutes}</p>
                    <p className="text-xs tracking-widest text-gray-500 mt-2">MINUTES</p>
                </div>
                <div className="p-8">
                    <p className="text-4xl font-bold text-gray-800">{timeLeft.seconds}</p>
                    <p className="text-xs tracking-widest text-gray-500 mt-2">SECONDS</p>
                </div>
            </div>
        </section>
    );
}
