import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const handleEdit=(project:Project) => {
    console.log(project)

  }

  

  const items = projects.map(project => (
    <div className="cols" key={project.id}>
      <ProjectCard project={project} onEdit={handleEdit}/>
      <ProjectForm/>
    </div>
  ))
  return (
    <div className="row">
      {items}
    </div>
  );
}

export default ProjectList;
