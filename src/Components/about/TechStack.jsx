import React, { useState, useEffect } from "react";
import { getAllTechs } from "../../api";
import { fetchData } from "../../utils/dataFetching";

function TechStack() {
  const [activeList, setActiveList] = useState([]);
  const [data, setData] = useState([]);

  function btnChangeBackground(target) {
    const otherBtns = document.querySelectorAll(".list-btn");
    otherBtns.forEach((item) => {
      item.classList.remove("btn-active");
    });
    target.target.classList.toggle("btn-active");
    switch (target.target.dataset.btn) {
      case "frontend":
        setActiveList(data.filter((tech) => tech.categories === "front"));
        break;
      case "backend":
        setActiveList(data.filter((tech) => tech.categories === "back"));
        break;
      case "fullstack":
        setActiveList(data.filter((tech) => tech.categories === "fullstack"));
        break;
      case "utils":
        setActiveList(data.filter((tech) => tech.categories === "utilities"));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetchData("techArray", setData, getAllTechs);
  }, []);
  useEffect(() => {
    setActiveList(data.filter((tech) => tech.categories === "fullstack"));
  }, [data]);

  return (
    <div className="tech-stack">
      <div className="tech-stack-list card">
        <div className="list">
          <div className="list-navbar">
            <button
              data-btn="fullstack"
              className="list-btn btn-active"
              onClick={btnChangeBackground}
            >
              Fullstack
            </button>
            <button
              data-btn="frontend"
              className="list-btn"
              onClick={btnChangeBackground}
            >
              Frontend
            </button>
            <button
              data-btn="backend"
              className="list-btn"
              onClick={btnChangeBackground}
            >
              Backend
            </button>
            <button
              data-btn="utils"
              className="list-btn"
              onClick={btnChangeBackground}
            >
              Utilities
            </button>
          </div>
          <ul>
            {activeList.map((tech) => {
              return (
                <li key={tech.id}>
                  <img
                    src={tech.image ? tech.image.url : "no img"}
                    className="tech-image"
                  ></img>
                  <div>
                    <div>{tech.name}</div>
                    <span className="tech-level">{tech.level}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="tech-stack-learning"></div>
    </div>
  );
}

export default TechStack;
