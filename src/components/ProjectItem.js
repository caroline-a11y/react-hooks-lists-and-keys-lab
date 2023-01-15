import React from "react";
import React, {useState} from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesSpan= technologies.map((object) => {
    return <span key={object}>{object}</span>  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologiesSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
