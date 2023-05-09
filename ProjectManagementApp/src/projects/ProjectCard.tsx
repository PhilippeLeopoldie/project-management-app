import React from 'react'
import { Project } from './Project'


const formatDescription = (description: string ):string => {
 return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard(props:ProjectCardProps) {
  const {project} = props;
  return (
    <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section--dark">
              <h5 className="section-strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{formatDescription(project.description)}</p>
              <p>Budjet: {project.budget} Kr</p>
            </section>
          </div>
  )
}

export default ProjectCard
