import { assets } from "@/assets/assets";
import Image from "next/image";

const Hero = () => {
    return (
        <>
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32 object-center"/>
            </div>

            <div className="flex flex-col m-10">
                <h1>Hi! I'm Felicia Josephine</h1>
                <h2 className="text-4xl">Computer science student.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
                <a 
                    href={"/sample.pdf"} 
                    download={"Sample.pdf"} 
                    className="border-2 p-3">
                        My Resume/CV
                </a>
            </div>
        </div>
        </>
    )
}

export default Hero;