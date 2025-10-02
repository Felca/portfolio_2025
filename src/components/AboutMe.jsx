import Image from "next/image";

const AboutMe = () => {
    return (
        <>
        <div className=" max-w-3xl mx-auto h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl">About Me</h1>
            
            <div className="flex p-5 gap-3">
                {/* <div className="m-auto">
                    <Image src={assets.user_image} alt="" className="w-160"/>
                </div> */}
                
                <div className="pl-10">
                    <p className="pb-3">Hi! I’m a BINUS University student majoring Software Engineering. I have a strong interest in technology, sustainability, and innovation, and I enjoy working on projects that combine creativity with problem-solving.</p>
                    
                    {/* <div className="grid grid-cols-3 text-center gap-5 py-5">
                        <p className="border-2 inline p-10">Kotak</p>
                        <p className="border-2 inline p-10">Kotak</p>
                        <p className="border-2 inline p-10">Kotak</p>
                    </div> */}

                    <p className="pb-3">Tools that I use</p>
                    {/* <div className="grid grid-cols-auto text-center gap-5 py-5">
                        <p className="border-2 inline">Kotak</p>
                        <p className="border-2 inline">Kotak</p>
                        <p className="border-2 inline">Kotak</p>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe;