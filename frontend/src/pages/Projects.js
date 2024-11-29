import React from "react";
import './Projects';

const projectList = [
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio to showcase my work.",
    technologies: ["React", "CSS", "React Router"],
    link: "https://github.com/yourusername/portfolio",
    styleClass: "portfolio", // Add a unique class
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce app with shopping cart and payments.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/ecommerce",
    styleClass: "ecommerce", // Add a unique class
  },
  {
    title: "Data-Collection Form",
    description: "A full-stack data collection app with inputs for child-data that involves gender, state of origin and level of higher institution attained. ",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/data-collection",
    styleClass: "datacollection", // Add a unique class
  },
  {
    title: "School-Portal Website",
    description: "A full-stack e-commerce website with payment gateways needed for flexible payment of student/ward fees.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/school-portal",
    styleClass: "portal", // Add a unique class
  },
];

const Projects = () => (
  <div className="projects-container">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-grid">
      {projectList.map((project, index) => (
        <div key={index} className={`project-card ${project.styleClass}`}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
