import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Christian",
    role: "Project Manager",
    about:
      "Hi, I’m Christian! I’m a Computer Science student at the University of West London and a Software Developer. I like solving challenging problems with small teams and overseeing solutions from start to finish. Currently, I am learning and working with the Blazor C# framework and developing my next project!",
    github: "https://github.com/Robrowno",
    linkedin: "https://www.linkedin.com/in/christian-brown-ba7741171/",
    image: "/images/christian.jpeg",
  },
  {
    name: "Sam",
    role: "Full Stack Developer",
    about:
      "Hi, I’m Sam! As a Computer Science student and developer at CmdCtrl, I build end-to-end features across the stack — from responsive front-end interfaces to reliable back-end systems. I focus on clean code, intuitive user experiences, and close teamwork to create a smooth, scalable e-commerce site.",
    github: "https://github.com/samko945",
    linkedin: "https://www.linkedin.com/in/samuel-javorka-a1553230a/",
    image: "/images/sam.jpeg",
  },
  {
    name: "Kostas",
    role: "Platform Engineer",
    about:
      "Hi, my name is Konstantinos Koliolios. I’m a Computer Science student at the University of West London with a strong interest in cloud computing and DevOps. I’m an AWS Certified Solutions Architect Associate and have hands-on experience using AWS services to build and deploy scalable applications. I’m also skilled in Infrastructure as Code using Terraform, and I enjoy automating cloud infrastructure to improve efficiency and reliability. I’m always looking for new challenges to grow my skills and contribute to meaningful projects.",
    github: "https://github.com/kostas39",
    linkedin: "https://www.linkedin.com/in/kostaskoliolios/",
    image: "/images/kostas.jpeg",
  },
  {
    name: "Tharun",
    role: "Frontend Developer",
    about:"Hi,I'm Tharun, a Cybersecurity undergraduate at the University of West London with a deep passion for safeguarding digital systems and exploring emerging security technologies. I value teamwork, clear documentation, and continuous learning, and I'm eager to tackle challenges that strengthen my technical and analytical skills in the ever-evolving field of cybersecurity.",
    github: "https://github.com/TharunGit220",
    linkedin: "https://www.linkedin.com/in/tharunuppala/",
    image: "/images/tharun.jpeg",
  },
  {
    name: "Chidi",
    role: "Intern / Customer Service",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
    github: "#",
    linkedin: "#",
    image: "/images/chidi.jpeg",
  }
];

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen py-10 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
        Meet the CmdCtrl Team:
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-5">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm font-bold mt-2">Role: {member.role}</p>
            <p className="text-sm text-gray-600 mt-1">{member.about}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
              >
                <FaGithub className="text-gray-800 hover:text-black text-xl" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedin className="text-blue-700 hover:text-blue-800 text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
