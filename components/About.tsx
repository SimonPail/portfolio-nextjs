import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "@/portfolio";
import Button from "@mui/material/Button";
import CustomLink from "./ui/CustomLink";
import ScrollFadeInWrapper from "./ui/ScrollFadeInWrapper";
import MotionPath from "./WavyLine";

const About = () => {
 const { name, role, description, resume, social } = about;

 return (
  <ScrollFadeInWrapper className="flex flex-col justify-center items-center pt-10 pb-5">
   {name && (
    <h1 className="text-6xl sm:text-7xl md:text-8xl font-display">
     Hi, I am <span className="opacity-75">{name}.</span>
    </h1>
   )}

   {role && <h2 className="text-2xl mt-2 font-display">A {role}.</h2>}
   <p className="max-w-[600px] mt-6 opacity-75 leading-relaxed">
    {description && description}
   </p>

   <div className="flex space-x-2 items-center mt-8">
    {resume && (
     <a href={resume} target="_blank">
      <Button variant="contained" color="primary" className="rounded-full">
       Resume
      </Button>
     </a>
    )}

    {social && (
     <>
      {social.github && (
       <CustomLink
        href={social.github}
        aria-label="github"
        variant="icon"
        target="_blank">
        <GitHubIcon />
       </CustomLink>
      )}

      {social.linkedin && (
       <CustomLink
        href={social.linkedin}
        aria-label="linkedin"
        variant="icon"
        target="_blank">
        <LinkedInIcon />
       </CustomLink>
      )}
     </>
    )}
   </div>
  </ScrollFadeInWrapper>
 );
};

export default About;
