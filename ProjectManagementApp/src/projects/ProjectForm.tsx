import React from "react";

interface ProjectfromProps {
  onCancel: () => void;
}

function ProjectForm({ onCancel }: ProjectfromProps) {
  return (
    <form className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="Enter name" />

      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="Enter Description" />

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="Enter budget" />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActrive" />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
