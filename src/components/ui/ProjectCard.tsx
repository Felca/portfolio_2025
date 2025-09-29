import Image from "next/image";
import { inherits } from "util";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tech: []; //languanges & tools pke apa
    githubLink: string;
    demoLink: string;
}

const ProjectCard = ({
    image,
    title,
    description,
    tech, 
    githubLink,
    demoLink,
} : ProjectCardProps) => {
    return (
        <>
        <div className="border-2 border-white shadow-xl/20 rounded-2xl p-10 hover:inset-shadow-sm/50 w-md">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>

            <div className="flex m-auto relative w-full h-48">
                <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                fill={false}
                className="object-contain object-center  p-3"
                sizes="(max-width: 256px) 100vw, 33vw"
                />
            </div>

            <div>
                {/* <h1 className="text-2xl">{title}</h1> */}
                <h1 className="text-left">{description}</h1>
            </div>

            <div className="flex flex-wrap gap-2 my-5">
                {tech.map((t, idx) => (
                    <span key={idx}
                    className="text-sm text-gray-700 bg-gray-300 p-1.5 rounded-3xl">
                        {t}
                    </span>
                ))}
            </div>


        </div>
        </>
    )
}

export default ProjectCard;