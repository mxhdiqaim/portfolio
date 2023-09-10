import React from "react";
import "./allProjects.styles.scss";
import ProjectCard from "../components/project-card/project-card.component";

import projectData from "../data/projects.json";

const AllProjects = () => (
  <div className="all-projects">
    {projectData.map((project, index) => (
      <ProjectCard key={index} index={index} project={project} />
    ))}
  </div>
);

export default AllProjects;
