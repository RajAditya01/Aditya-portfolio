import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaPython,
  FaGit,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAdobephotoshop,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiFigma,
  SiNodedotjs,
  SiNpm,
  SiVisualstudiocode,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import man from "../../../assets/man.json";
import "./index.css";

const MySkill = () => {
  const languages = [
    { title: "C", icon: <CgCPlusPlus className="text-blue-500" /> },
    { title: "C++", icon: <CgCPlusPlus className="text-blue-400" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { title: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { title: "Java", icon: <FaJava className="text-red-600" /> },
    { title: "Python", icon: <FaPython className="text-blue-400" /> },
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  ];

  const frameworks = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "NodeJS", icon: <SiNodedotjs className="text-green-600" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },

  ];

  const tools = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { title: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Git", icon: <FaGit className="text-orange-600" /> },
    { title: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { title: "Netlify", icon: <SiFirebase className="text-green-400" /> },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
    },
    { title: "Figma", icon: <SiFigma className="text-purple-600" /> },
    {
      title: "Visual Studio Code",
      icon: <SiVisualstudiocode className="text-blue-600" />,
    },
    { title: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { title: "Vercel", icon: <SiFirebase className="text-black" /> },
    { title: "NPM", icon: <SiNpm className="text-red-600" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
          <div className="flex overflow-hidden w-full max-w-xl mb-4">
            <div className="animate animate-time-1 flex">
              {languages?.map((skill, index) => (
                <div key={index} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
              {/* Duplicate the items to create a seamless loop */}
              {languages?.map((skill, index) => (
                <div key={`duplicate-${index}`} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Library & Frameworks:
          </h2>
          <div className="flex overflow-hidden w-full max-w-xl mb-4">
            <div className="animate animate-time-2 flex">
              {frameworks?.map((skill, index) => (
                <div key={index} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
              {/* Duplicate the items to create a seamless loop */}
              {frameworks?.map((skill, index) => (
                <div key={`duplicate-${index}`} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Tools & Technologies:
          </h2>
          <div className="flex overflow-hidden w-full max-w-xl mb-4">
            <div className="animate animate-time-3 flex">
              {tools?.map((skill, index) => (
                <div key={index} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
              {/* Duplicate the items to create a seamless loop */}
              {tools?.map((skill, index) => (
                <div key={`duplicate-${index}`} className="text-center m-3">
                  <div
                    className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                    title={skill.title}
                  >
                    {skill?.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
