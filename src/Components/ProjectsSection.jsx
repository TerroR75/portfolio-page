import { useState } from 'react';
import ProjectList from './projects/ProjectList';

function ProjectsSection() {
  const [count, setCount] = useState(0);

  return (
    <section id='project-section' className='Projects-Section'>
      <h2 className='section-label'>&lt;Projects &#8725;&gt;</h2>
      <ProjectList />
    </section>
  );
}

export default ProjectsSection;
