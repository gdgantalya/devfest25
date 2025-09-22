import { Link } from "react-router-dom";
import gdgLogo from "./../../public/logo.png";
export default function Navbar() {
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
        </nav>
    );
}
