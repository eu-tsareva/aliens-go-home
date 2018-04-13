import React from 'react';
import *  as constants from '../utils/constants';

const Sky = () => {
  const skyStyle = {
    fill: "#30abef",
  };
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={constants.skyAndGroundWidth/-2}
      y={100 - gameHeight}
      width={constants.skyAndGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;