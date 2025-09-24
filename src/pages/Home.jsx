import React from "react";
import { Link } from "react-router-dom";
import SponsorsSlider from "../components/SponsorsSlider";
import { ChevronDown, CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import gdgLogo from "../assets/gdgLogo.png";
import gdgAbout from "../assets/gdg_antalya_cover.jpg";
const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                id="top"
                className="text-grey h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
                style={{
                    backgroundImage: `url('/photo.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // paralaks etkisi için
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div> {/* Opaklık ayarı */}

                <div className="relative z-10 bg-white/20 backdrop-blur-md border-4 border-white/40 rounded-2xl p-6 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mt-12">
                    <img
                        src={gdgLogo}
                        alt="GDG Antalya Logo"
                        className="w-40 mb-3 mx-auto" // boyutunu burada ayarlayabilirsin
                    />
                    <h1 className="text-5xl font-bold mb-4 text-white">DevFest Antalya’25</h1>

                    {/* Tarih ve Yer */}
                    <div className="flex flex-col items-center gap-3 text-grey mt-6">
                        <div className="flex items-center gap-2">
                            <CalendarDays className="text-black" size={22} />
                            <span>06.12.2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-black" size={22} />
                            <span>Antalya</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-6 pt-5">
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className=" flex items-center justify-center gap-2 bg-black shadow-xl transition text-white border-2 px-9 py-4 rounded-3xl hover:bg-blue-400">
                                <span>Get ticket</span>
                                <ArrowUpRight size={25} />
                            </button>
                        </a>
                        <Link to="/speakers">
                            <button className="bg-black shadow-xl transition text-white border-2 px-6 py-4 rounded-3xl hover:bg-blue-400">
                                View Speakers
                            </button>
                        </Link>
                    </div>
                </div>
                <a
                    href="#about"
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 
              text-white rounded-full 
             flex items-center justify-center 
             hover:bg-white/20 transition duration-300 z-10"
                >
                    <ChevronDown size={28} className="animate-slow-bounce" />
                </a>
            </section>


            {/* Hakkımızda Section */}
            <section id="about" className="py-20 bg-gray-100 text-center px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Yazı kısmı */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-serif mb-6">About</h2>
                        <p className="text-lg text-gray-700">
                            This event is an organization that brings together technology and innovation,
                            uniting leading experts in the sector and young talents.
                        </p>
                    </div>

                    {/* Fotoğraf kısmı */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={gdgAbout}
                            alt="About"
                            className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Sponsorlar Slider */}
            <section id="sponsors" className="py-20 bg-white">
                <h2 className="text-3xl font-serif text-center mb-10">Our Sponsors</h2>
                <SponsorsSlider />
            </section>

            {/* Harita Section */}
            <section id="location" className="py-20 bg-gray-100 text-center">
                <h2 className="text-3xl font-serif mb-6">Location</h2>
                <div className="flex justify-center">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.628165105053!2d30.7056!3d36.8853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391b3a6df0f09%3A0x123456789abcdef!2sGDG%20Antalya!5e0!3m2!1str!2str!4v1696600000000"
                        width="80%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Home;
