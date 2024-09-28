import React from 'react';
import './Projects.css'; // Adjust path as needed

const projects = [
  {
    title: "House Price Prediction Sytem",
    image: "/src/assets/house.png",
    description: "Developed using Python, Machine Learning, Javascript...",
    role: "Lead Developer"
  },
  {
    title: "School Management System",
    image: "/src/assets/school.jpg",
    description: "Built School Management System, using Laravel and PHP...",
    role: "Full-Stack Developer"
  },
  {
    title: "Personal Portfolio",
    image: "/src/assets/k.png",
    description: "A web application of my achievements...",
    role: "Frontend Developer"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><b>Role:</b> {project.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
