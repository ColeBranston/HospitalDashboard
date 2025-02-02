import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/HeroAnimation.json';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='hero'>
      <div className='heroContainer'>
        <div className='textContainer'>
          <p className='heroText'>Help Starts</p>
          <span className='heroBig'>Here.</span>
        </div>
        <div className='imageContainer'>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
