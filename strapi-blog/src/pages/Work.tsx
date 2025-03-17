import React, { use, useEffect, useState } from "react";

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);


  return <div>
    {loading ? "loading..." : projects.map((project) => (
      <div key={project.id}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Plyr src={`http://localhost:1337${project.image.url}`} alt={project.title} />
      </div>
    ))}
  </div>;
}
