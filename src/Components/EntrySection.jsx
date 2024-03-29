import { useState } from 'react';
import AnimatedGears from './AnimatedGears.jsx';

function EntrySection() {
  const [count, setCount] = useState(0);

  return (
    <section id='entry-section' className='Entry-Section'>
      <div className='name typewriter'>
        <h1>Kamil Sulimierski </h1>
        <span className='entry-description'>
          &lt;<span className='intext-accent'>Web</span> developer&#47;&gt;
        </span>
        <div className='links'>
          <a href='https://github.com/TerroR75' target='_blank'>
            <i className='devicon-github-original'></i>
          </a>
          <a href='https://www.linkedin.com/in/kamil-sulimierski-5610531b5/' target='_blank'>
            <i className='devicon-linkedin-plain'></i>
          </a>
        </div>
        <div className='grid-bg'></div>
        <AnimatedGears />
      </div>
    </section>
  );
}

export default EntrySection;
