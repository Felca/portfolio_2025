import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tech: []; //languanges & tools pke apa
    githubLink?: string;
    demoLink?: string;
    link?: string;
}

const ProjectCard = ({
    image,
    title,
    description,
    tech, 
    githubLink,
    demoLink,
    link,
} : ProjectCardProps) => {
    return (
        <>
        <div className="bg-white border-2 border-white shadow-xl/20 rounded-2xl p-10 hover:inset-shadow-sm/50 max-w-sm ">
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

            <div className="flex gap-3">
                {githubLink && (
                    <div className="text-left underline hover:animate-bounce">
                    <Link href={githubLink}>Check Github</Link>
                    </div>
                )}
                {demoLink && (
                    <div className="text-left underline hover:animate-bounce">
                    <Link href={demoLink}>Check Demo</Link>
                    </div>
                )}
            </div>

            <div className="text-left underline hover:animate-bounce">
                {link && (
                    <Link href={"{link}"}>Proposal Ataprino</Link>
                )}
            </div>


        </div>
        </>
    )
}

export default ProjectCard;