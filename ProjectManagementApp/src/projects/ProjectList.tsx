import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState<object>({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
    console.log("my object: ", project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  const items = projects.map((project) => (
    <div className="cols" key={project.id}>
      {project === projectBeingEdited ? (
        <ProjectForm onCancel={cancelEditing} />
      ) : (
        <ProjectCard project={project} onEdit={handleEdit} />
      )}
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ProjectList;
