import { getAllProjects } from "../../api";
import { useState, useEffect } from "react";
import { fetchData } from "../../utils/dataFetching";
import EmblaCarousel from "../Features/EmblaCarousel";

function ProjectList() {
  const [data, setData] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    fetchData("projectsArray", setData, getAllProjects);
  }, []);

  useEffect(() => {
    setProjectsArray(data);
  }, [data]);

  return (
    <div className="projects-container">
      {projectsArray.map((project) => {
        return (
          <div key={project.id} className="project-wrapper">
            <div className="img-wrapper">
              <EmblaCarousel
                slides={project.projectImage}
                options={{ loop: true, align: "start" }}
              />
            </div>
            <div className="description-wrapper card card-opac-08">
              <h3>{project.title}</h3>
              <div className="description">{project.description}</div>
              <div className="tech-stack">
                {project.techStacks.map((tech) => (
                  <img
                    key={tech.id}
                    className="project-tech-stack-img"
                    src={tech.image.url}
                  ></img>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
