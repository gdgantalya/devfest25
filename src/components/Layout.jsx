import React from 'react'
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
    const location = useLocation();

    let bgColor = "bg-white";
    if (location.pathname === "/contact") bgColor = "bg-pink-100";
    if (location.pathname === "/calendar") bgColor = "bg-blue-100";
    if (location.pathname === "/speakers") bgColor = "bg-yellow-100";
    if (location.pathname === "/sponsors") bgColor = "bg-green-50";
    if (location.pathname === "/team") bgColor = "bg-purple-100";

    return (
        <div className={`${bgColor} flex flex-col min-h-screen`}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}
