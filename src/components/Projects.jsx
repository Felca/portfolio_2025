import ProjectCard from "./subcomponents/ProjectCard";
import LOGO_ATAPRINO from "@/assets/LOGO_ATAPRINO.png";
import LOGO_TRACKELING from "@/assets/LOGO_TRACKELING.png"
import LOGO_CATERINGZ from "@/assets/LOGO_CATERINGZ.png";
import LOGO_ZENROUTE from "@/assets/LOGO_ZENROUT.png"
import { InteractiveGridPattern } from "./InteractiveGridPattern";

const projects = [
  {
    id:1,
    image: LOGO_ATAPRINO,
    title: 'ATAPRINO',
    description: 'Ataprino is an Internet of Things (IoT)-based smart roof system developed as an innovative solution to support an energy-efficient and practical urban lifestyle.',
    tech: ['Wokwi', 'C'],
    link: "https://drive.google.com/file/d/1lj3eeCpL_zUQz5nqxkJ3F79Qsy6dhOmf/view?usp=sharing",
  },
  {
    id: 2,
    image: LOGO_TRACKELING,
    title: "Trackeling",
    description:
      "Mobile application that allows customers to find and order food from nearby street vendors, while also allowing vendors to find said customers and deliver the foods easily.",
    tech: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Trackeling/trackeling.github.io",
    demoLink: "https://trackeling.github.io/",
  },
  {
    id: 3,
    image: LOGO_CATERINGZ,
    title: "Cateringz",
    description: "A static website about catering services, with an original design. This website aims to connect customers with local catering services easily and quickly. Through this platform, users can browse menus from various catering providers and customize packages according to their event needs.",
    tech: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Felca/CommunityBite",
    demoLink: "https://felca.github.io/cateringz-aol.github.io/Home.html",
  },
  {
    id:4,
    image: LOGO_ZENROUTE,
    title: "ZenRoute",
    description: "ZenRoute is a simple web app that helps you organize your trips and the places you want to visit. Whether it's a weekend getaway or a month-long adventure, this app lets you create trips, add multiple locations, and track your travel plans in one place.",
    tech: ["Next.js", "TailwindCSS"],
    githubLink: "https://github.com/Felca/travel_planner",
    demoLink: "https://travel-planner-5ia5.vercel.app/",
  },
];

const Projects = () => {
    return (
        <>
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Background Grid */}
          <InteractiveGridPattern
              className="absolute inset-0 z-0 pointer-events-auto [mask-image:radial-gradient(white,transparent)]"
              width={50}
              height={50}
              squares={[100, 200]}
              squaresClassName="stroke-gray-300/20"
          />
          
          {/* projects */}
          <div className="z-10 w-11/12 max-w-4xl h-screen mx-auto text-center flex flex-col items-center justify-center ">
              <div>
                  <p>My portfolio</p>
                  <h1 className="text-4xl">My latest work</h1>
                  <p>Explore a collection of projects showcasing. my expertise in front-end development.</p>
              </div>

              <div className="mt-5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-y-auto no-scrollbar h-8/12">
                  {projects.map((project) => (
                      <ProjectCard
                      key={project.id}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      githubLink={project.githubLink}
                      demoLink={project.demoLink}
                      link={project.link}
                      />
                  ))}
              </div>
          </div>
        </div>
        </>
    )
}

export default Projects;