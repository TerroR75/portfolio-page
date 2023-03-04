import React from 'react';
import gearBig from '../../assets/cogwheel-svgrepo-com.svg';

function TechStack() {
  return (
    <div className='tech-stack'>
      <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
      <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
    </div>
  );
}

export default TechStack;
