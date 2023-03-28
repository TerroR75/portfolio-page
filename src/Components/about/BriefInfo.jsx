import { useState } from 'react';

function BriefInfo() {
  const [count, setCount] = useState(0);

  return (
    <section className='brief-info'>
      <h2 className='section-label'>&lt;About Me &#8725;&gt;</h2>
      <span>
        Hello, I'm Kamil and welcome to my personal website!<br></br> Throughout my life I always pursued creative way of life and
        thinking. I love problem solving and is there a better career path other than software development?
      </span>
    </section>
  );
}

export default BriefInfo;
