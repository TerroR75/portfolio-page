import { getAllProjects } from "../../api";
import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/dataFetching";
import EmblaCarousel from "../Features/EmblaCarousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

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
              <div className="project-links">
                <a
                  href={project.linkToCode}
                  target="_blank"
                  className="project-link project-sourcecode"
                >
                  <GitHubIcon
                    sx={{
                      fontSize: "28px",
                      filter: "drop-shadow(5px 5px 5px #000);",
                    }}
                  />
                </a>
                <a
                  href={project.linkToPreview}
                  target="_blank"
                  className="project-link project-livepreview"
                >
                  <PublicIcon
                    sx={{
                      fontSize: "28px",
                      filter: "drop-shadow(5px 5px 5px #000);",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
