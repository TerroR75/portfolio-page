import { useState } from 'react';

function AboutSection() {
  const [count, setCount] = useState(0);

  return (
    <section id='about-section' className='About-Section'>
      Tech section
    </section>
  );
}

export default AboutSection;
