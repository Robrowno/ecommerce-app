import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Christian",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
    github: "https://github.com/Robrowno",
    linkedin: "https://www.linkedin.com/in/christian-brown-ba7741171/",
    image: "/images/christian.jpeg",
  },
  {
    name: "Sam",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
    github: "https://github.com/samko945",
    linkedin: "https://www.linkedin.com/in/samuel-javorka-a1553230a/",
    image: "/images/sam.jpeg",
  },
  {
    name: "Kostas",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
    github: "https://github.com/kostas39",
    linkedin: "https://www.linkedin.com/in/kostaskoliolios/",
    image: "/images/kostas.jpeg",
  },
  {
    name: "Tharun",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
    github: "https://github.com/TharunGit220",
    linkedin: "https://www.linkedin.com/in/tharunuppala/",
    image: "/images/tharun.jpeg",
  },
  {
    name: "Chidi",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac pretium ante. Etiam et ex tempus, posuere nisi ac, maximus metus.",
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
            <p className="text-sm font-bold mt-2">Role:</p>
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
