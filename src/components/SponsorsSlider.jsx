import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SponsorsSlider = () => {
    const sponsors = [
        { id: 1, img: "https://via.placeholder.com/150x80?text=Sponsor+1" },
        { id: 2, img: "https://via.placeholder.com/150x80?text=Sponsor+2" },
        { id: 3, img: "https://via.placeholder.com/150x80?text=Sponsor+3" },
        { id: 4, img: "https://via.placeholder.com/150x80?text=Sponsor+4" },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 2000 }}
                loop={true}
            >
                {sponsors.map((sponsor) => (
                    <SwiperSlide key={sponsor.id}>
                        <img
                            src={sponsor.img}
                            alt={`Sponsor ${sponsor.id}`}
                            className="mx-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SponsorsSlider;
