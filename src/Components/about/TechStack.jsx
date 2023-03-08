import React, { useState } from 'react';
import gearBig from '../../assets/cogwheel-svgrepo-com.svg';
import { frontend, backend, experience, learning, futurePlans } from '../../data/techstacklist';

function TechStack() {
  const [activeList, changeActiveList] = useState(frontend);

  function changeList() {
    changeActiveList(backend);
  }
  function btnChangeBackground(target) {
    const otherBtns = document.querySelectorAll('.list-btn');
    otherBtns.forEach((item) => {
      item.classList.remove('btn-active');
    });
    target.target.classList.toggle('btn-active');

    switch (target.target.dataset.btn) {
      case 'frontend':
        changeActiveList(frontend);
        break;
      case 'backend':
        changeActiveList(backend);
        break;
      case 'experience':
        changeActiveList(experience);
        break;
      case 'learning':
        changeActiveList(learning);
        break;
      case 'future-plans':
        changeActiveList(futurePlans);
        break;
    }
  }

  return (
    <div className='tech-stack'>
      <div className='tech-stack-animatedgears'>
        <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
        <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
      </div>

      <div className='tech-stack-list card'>
        <div className='list'>
          <div className='list-navbar'>
            <button data-btn='frontend' className='list-btn btn-active' onClick={btnChangeBackground}>
              Frontend
            </button>
            <button data-btn='backend' className='list-btn' onClick={btnChangeBackground}>
              Backend
            </button>
            <button data-btn='experience' className='list-btn' onClick={btnChangeBackground}>
              Experience with
            </button>
            <button data-btn='learning' className='list-btn' onClick={btnChangeBackground}>
              Learning
            </button>
            <button data-btn='future-plans' className='list-btn' onClick={btnChangeBackground}>
              Future Plans
            </button>
          </div>
          <ul>
            {activeList.map((tech) => {
              return (
                <li key={tech.id}>
                  <i className={tech.iconClass}></i>
                  {tech.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='tech-stack-learning'></div>
    </div>
  );
}

export default TechStack;
