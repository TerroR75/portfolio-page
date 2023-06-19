import React, { useState, useEffect } from "react";
import {
  frontend,
  backend,
  experience,
  learning,
  futurePlans,
} from "../../data/techstacklist";
import { getAllTechs } from "../../api";

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

  const fetchData = async () => {
    const storedData = localStorage.getItem("techList");
    if (!storedData) {
      const data = await getAllTechs();
      localStorage.setItem("techList", JSON.stringify(data));
      setData(data.techArray);
    } else {
      const parsedData = storedData ? JSON.parse(storedData) : null;

      const lastFetchDate = parsedData?.fetchDate
        ? new Date(parsedData.fetchDate)
        : null;
      const currentTime = new Date();
      const cooldown = 1 * 60 * 60 * 1000; // 1 hour cooldown
      const shouldFetchData =
        !lastFetchDate || currentTime - lastFetchDate >= cooldown;

      if (shouldFetchData) {
        const data = await getAllTechs();
        localStorage.setItem("techList", JSON.stringify(data));
        setData(data.techArray);
      } else {
        const data = JSON.parse(localStorage.getItem("techList"));
        setData(data.techArray);
      }
    }
  };

  useEffect(() => {
    fetchData();
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
                  {tech.name}
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
