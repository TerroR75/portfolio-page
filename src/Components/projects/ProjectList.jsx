import { projects } from '../../data/projectslist';

function ProjectList() {
  return (
    <div className='projects-container'>
      {projects.map((project) => {
        return (
          <div key={project.id} className='project-wrapper'>
            <div className='img-wrapper'>
              <img src={project.img}></img>
            </div>
            <div className='description-wrapper card card-opac-08'>
              <h3>{project.name}</h3>
              <div className='description'>{project.descr}</div>
              <div className='tech-stack'>{project.builtWith}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
