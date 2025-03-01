import uniqid from "uniqid";
import { projects } from "../portfolio";
import ProjectContainer from "./ProjectContainer";
import CustomSection from "./ui/CustomSection";

const Projects = () => {
 if (!projects.length) return null;

 return (
  <CustomSection title="Projects" id="projects" className="py-5">
   <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-auto-fit md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
     <ProjectContainer key={uniqid()} project={project} />
    ))}
   </div>
  </CustomSection>
 );
};

export default Projects;
