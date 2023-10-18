import React from 'react';
import Typewriter from 'typewriter-effect';

const Jumbotron = ({strings}) => (
  <div>
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
      }}
    />
  </div>
);

export default Jumbotron;
