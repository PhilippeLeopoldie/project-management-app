import React from 'react'
import { Project } from './Project'


const formatDescription = (description: string ):string => {
 return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard(props:ProjectCardProps) {
  return (
    <div className="card">
            <img src={props.project.imageUrl} alt={props.project.name} />
            <section className="section--dark">
              <h5 className="section-strong">
                <strong>{props.project.name}</strong>
              </h5>
              <p>{formatDescription(props.project.description)}</p>
              <p>Budjet: {props.project.budget} Kr</p>
            </section>
          </div>
  )
}

export default ProjectCard
