import Image from "next/image";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern"

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <InteractiveGridPattern
                className="absolute inset-0 z-0 pointer-events-auto [mask-image:radial-gradient(white,transparent)]"
                width={50}
                height={50}
                squares={[60, 60]}
                squaresClassName="stroke-gray-300/20"
            />

            {/* Foreground Content */}
            <div className="pointer-events-none z-10 w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4">
                <div>
                    <Image 
                        src="/profile-img.png"
                        width={150}
                        height={150}
                        alt="Profile picture" 
                        className="rounded-full object-center"
                    />
                </div>

                <div className="flex flex-col m-10">
                    <h1 className="text-2xl md:text-3xl font-semibold">Hi! I'm Felicia Josephine</h1>
                    <h2 className="text-4xl">Computer science student.</h2>
                </div>

                <div className="flex items-center gap-1.5 pointer-events-auto border-2 border-gray-400 px-6 py-3 rounded-md bg-white transition duration-500 hover:invert">
                    <Image src="/download-icon.png" width={20} height={20} alt="arrow icon"/>
                    <a 
                        href={"/Resume.pdf"} 
                        download={"Felicia_Josephine_CV.pdf"} 
                    >
                        My Resume / CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
