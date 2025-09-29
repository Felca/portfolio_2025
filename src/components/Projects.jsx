import ProjectCard from "./ui/ProjectCard";
import LOGO_ATAPRINO from "@/assets/public/LOGO_ATAPRINO.png";
import LOGO_TRACKELING from "@/assets/public/LOGO_TRACKELING.png"
import LOGO_CATERINGZ from "@/assets/public/LOGO_CATERINGZ.png";

const projects = [
  {
    id:1,
    image: LOGO_ATAPRINO,
    title: 'ATAPRINO',
    description: 'Ataprino adalah sistem atap pintar berbasis Internet of Things (IoT) yang dikembangkan menjadi solusi inovatif untuk mendukung gaya hidup urban yang hemat energi dan praktis.',
    tech: ['Wokwi', 'C'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    image: LOGO_TRACKELING,
    title: "Trackeling",
    description:
      "Mobile application that allows customers to find and order food from nearby street vendors, while also allowing vendors to find said customers and deliver the foods easily.",
    tech: ["HTML", "CSS", "Javascript"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 3,
    image: LOGO_CATERINGZ,
    title: "Cateringz",
    description: "A static website about catering services, with an original design. This website aims to connect customers with local catering services easily and quickly. Through this platform, users can browse menus from various catering providers and customize packages according to their event needs.",
    tech: ["HTML", "CSS", "Javascript"],
    githubLink: "#",
    demoLink: "#",
  }
];

const Projects = () => {
    return (
        <>
        <div className=" mx-auto h-screen text-center flex flex-col items-center justify-center pb-10">
            <div>
                <p>My portfolio</p>
                <h1 className="text-4xl">My latest work</h1>
                <p>Explore a collection of projects showcasing. my expertise in front-end development.</p>
            </div>

            <div className="mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-10 overflow-y-auto no-scrollbar h-8/12">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects;