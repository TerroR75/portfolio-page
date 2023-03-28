import gearBig from '../assets/cogwheel-svgrepo-com.svg';

function AnimatedGears() {
  return (
    <div className='tech-stack-animatedgears'>
      <div className='gear-container'>
        <div className='gear-image'></div>
        <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
      </div>
      <div className='gear-container'>
        <div className='gear-image'></div>
        <img className='gear-512' src={gearBig} alt='Cogwheel'></img>
      </div>
    </div>
  );
}

export default AnimatedGears;
