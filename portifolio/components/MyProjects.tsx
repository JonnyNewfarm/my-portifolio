import Image from "next/image";
import React, { useState } from "react";

const MyProjects = () => {
  const projects = [
    { name: "Custom canvas", src: "/canvasscreen.png" },
    { name: "Lunnettes", src: "/lunettesscreen.png" },
  ];

  const defaultImage = projects[0].src; // Default to Custom canvas
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <div className="relative w-[600px] h-[400px] mx-auto mb-4">
          <Image
            src={hoveredImage || defaultImage}
            alt="project preview"
            fill
            className="object-contain rounded shadow transition-opacity duration-300"
          />
        </div>
        <p className="text-3xl font-semibold mb-4">My Projects</p>
        <div className="flex gap-x-6 justify-center items-center">
          {projects.map((project) => (
            <div
              key={project.name}
              onMouseEnter={() => setHoveredImage(project.src)}
              onMouseLeave={() => setHoveredImage(null)}
              className="cursor-pointer text-2xl text-gray-600 hover:text-black transition-colors"
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
