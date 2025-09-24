import { useState } from "react";
import { Link } from "react-router-dom";
import gdgLogo from "../assets/logo.png";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800\50 py-7 p-4 backdrop-blur fixed top-0 left-0 w-full shadow z-50 text-black flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={gdgLogo}
                        alt="GDG Antalya Logo"
                        className="w-8 h-8"
                    />
                    <h1 className="font-bold">DevFest Google Antalya</h1>
                </Link>
            </div>
            <ul className="hidden md:flex gap-6">
                <li><Link to="/" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-white transition-colors duration-300" >Home</Link></li>
                <li><Link to="/contact" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-pink-200/50 transition-colors duration-300">Contact</Link></li>
                <li><Link to="/calendar" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-blue-200/50 transition-colors duration-300">Schedule</Link></li>
                <li><Link to="/speakers" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-yellow-200/50 transition-colors duration-300">Speakers</Link></li>
                <li><Link to="/sponsors" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-blue-200/50 transition-colors duration-300">Sponsorship</Link></li>
                <li><Link to="/team" className="hover:text-black hover:border-1 hover:border-black/40 p-2 rounded-3xl hover:bg-purple-200/50 transition-colors duration-300">Organizers</Link></li>
            </ul>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black text-2xl"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobil Menü */}
            {isOpen && (
                <div className="absolute text-black text-lg bg-white/90 top-full left-0 w-full flex flex-col gap-4 p-4 md:hidden">
                    <ul className="flex flex-col gap-6">
                        <li>
                            <Link to="/" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-white transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-pink-200/50 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/calendar" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-blue-200/50 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to="/speakers" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-yellow-200/50 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Speakers
                            </Link>
                        </li>
                        <li>
                            <Link to="/sponsors" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-blue-200/50 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Sponsorship
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="hover:text-black hover:border-2 hover:border-black/40 p-2 rounded-3xl hover:bg-purple-200/50 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                Organizers
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
