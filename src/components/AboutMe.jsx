import Image from "next/image";
import { InteractiveGridPattern } from "./InteractiveGridPattern";
import Link from "next/link";

const AboutMe = () => {
    return (
        <>
        <div className="relative w-full h-screen flex items-center justify-center">
            {/* Background Grid */}
            <InteractiveGridPattern
                className="absolute inset-0 z-0 pointer-events-auto [mask-image:radial-gradient(white,transparent)]"
                width={50}
                height={50}
                squares={[60, 60]}
                squaresClassName="stroke-gray-300/20"
            />

            {/* About me */}
            <div className="z-10 w-11/12 max-w-4xl mx-auto flex flex-col flex-wrap items-center justify-center gap-6 sm:min-w-min">
                {/* heading */}
                <h1 className="text-4xl">About Me</h1>
                
                <div>
                    <div className="lg:pl-10">
                        {/* description */}
                        <p>E-mail: fjosephine131@gmail.com</p>
                        <p className="pb-3">Hi! I’m currently in 5th semester computer science major with minor in software engineering, expected to graduate in 2027. I'm also an active member of Ureeka, where I collaborate with others to build real-world projects.</p>


                        <div className="pb-3">
                            <p className="pb-3">Languanges that I use:</p>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    Next.js
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    C
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    Java
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    HTML/CSS
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    Python
                                </div>
                            </div>
                        </div>

                        <div className="pb-3">
                            <p className="pb-3">Tools that I use:</p>
                            <div className="flex items-center gap-4">
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    <Image 
                                        src="/vscode.png" 
                                        alt="vscode logo" 
                                        height={30} width={30}>
                                    </Image>
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    <Image 
                                        src="/git.png"
                                        alt="git logo" 
                                        height={30} width={30}>
                                    </Image>
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    <Image 
                                        src="/figma.png"
                                        alt="figma logo" 
                                        height={30} width={30}>
                                    </Image>
                                </div>
                            </div>
                        </div>

                        <div className="pb-3">
                            <p className="pb-3">Links:</p>
                            <div className="flex items-center gap-4">
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    <Link href={"https://github.com/Felca"}>
                                        <Image 
                                            src="/GITHUBLOGO.png"
                                            alt="github" 
                                            height={30} width={30}>
                                        </Image>
                                    </Link>
                                </div>
                                <div className="border-1 border-black p-3 rounded-3xl">
                                    <Link href={"https://www.linkedin.com/in/felicia-josephine-a6237a374/"}>
                                        <Image 
                                            src="/LINKEDINLOGO.jpg"
                                            alt="linkedin" 
                                            height={30} width={30}>
                                        </Image>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default AboutMe;