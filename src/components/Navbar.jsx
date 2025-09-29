import Image from "next/image";
import {assets} from '@/assets/assets'
import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav className="w-full fixed my-5 px-5 lg:px-8 flex items-center justify-between z-50">
            <Link href="#">
                Felicia Josephine
                {/* <Image src={assets.logo} alt="logo"
                className="w-28 cursor-pointer"/> */}
            </Link>

            <ul className="flex justify-evenly gap-10">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About me</Link></li>
                <li><Link href="#project">My work</Link></li>
            </ul>

            <div>
                <a href="" className="flex items-center gap-2">
                    Contact 
                    <Image src={assets.arrow_icon} alt="arrow icon" className="w-3"/>
                </a>
            </div>
        </nav>
        </>
    )
}

export default Navbar;