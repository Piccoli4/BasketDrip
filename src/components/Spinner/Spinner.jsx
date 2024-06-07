import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import basketballAnimation from './basketball-animation.json'

const Spinner = () => {
  return (
    <Player
      autoplay
      loop
      src={basketballAnimation}
      style={{ height: '200px', width: '200px' }}
    />
  );
};

export default Spinner;
