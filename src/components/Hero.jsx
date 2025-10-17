import profile_img from "@/assets/profile-img.png"
import Image from "next/image";
import { InteractiveGridPattern } from "@/components/test"

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <InteractiveGridPattern
                className="absolute inset-0 z-0 pointer-events-auto [mask-image:radial-gradient(white,transparent)]"
                width={50}
                height={50}
                squares={[100, 200]}
                squaresClassName="stroke-gray-300/20"
            />

            {/* Foreground Content */}
            <div className="pointer-events-none z-10 w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4">
                <div>
                    <Image 
                        src={profile_img} 
                        alt="Profile picture" 
                        className="rounded-full w-32 object-center"
                    />
                </div>

                <div className="flex flex-col m-10">
                    <h1 className="text-2xl md:text-3xl font-semibold">Hi! I'm Felicia Josephine</h1>
                    <h2 className="text-4xl">Computer science student.</h2>
                    <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="pointer-events-auto">
                    <a 
                        href={"/Resume.pdf"} 
                        download={"Felicia Josephine CV.pdf"} 
                        className="border-2 border-gray-400 px-6 py-3 rounded-md hover:bg-black hover:text-white transition duration-500"
                    >
                        My Resume / CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
