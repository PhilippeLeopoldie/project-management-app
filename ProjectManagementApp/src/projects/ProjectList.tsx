import React from "react";
import { Project } from "./Project";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return ( 
    <div className="row">
      {projects.map(project=>(
        <div className="card" key={project.id}>
          <img src={project.imageUrl} alt={project.name}/>
          
          
          {project.name}
        
        
        </div>
      ))}

    </div>
      
    

  )
}

export default ProjectList;
