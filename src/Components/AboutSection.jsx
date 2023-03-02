import { useState } from 'react';
import BriefInfo from './about/BriefInfo';
import TechStack from './about/TechStack';

function AboutSection() {
  const [count, setCount] = useState(0);

  return (
    <section id='about-section' className='About-Section'>
      <BriefInfo />
      <TechStack />
    </section>
  );
}

export default AboutSection;
