"use client"
import Image from "next/image";
import arrow_icon from "@/assets/arrow-icon.png"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="w-full fixed top-0 left-0 
        bg-white shadow-md 
        md:bg-transparent md:shadow-none md:backdrop-blur-
        py-5 px-5 
        flex items-center justify-between z-50">
            <Link href="#home">
                Felicia Josephine
                {/* <Image src={assets.logo} alt="logo"
                className="w-28 cursor-pointer"/> */}
            </Link>

            <ul className="hidden md:flex justify-evenly gap-10">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About me</Link></li>
                <li><Link href="#project">My work</Link></li>
            </ul>

            <div>
                <a href="" className="hidden md:flex items-center gap-2">
                    Contact 
                    <Image src={arrow_icon} alt="arrow icon" className="w-3"/>
                </a>
            </div>

            {/* Mobile */}
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            ☰
            </button>

            {isOpen && (
                <div className="absolute top-18 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
                    <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)}>About me</Link>
                    <Link href="#project" onClick={() => setIsOpen(false)}>My work</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        Contact 
                        <Image src={arrow_icon} alt="arrow icon" className="w-3" />
                    </Link>
                </div>
            )}
        </nav>
        </>
    )
}

export default Navbar;