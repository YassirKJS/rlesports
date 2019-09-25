import React from 'react';
//import Tilt from 'react-tilt';

export default function Logo() {
  const avatar = require('../../resources/imgs/main-orange-ball-orange-car.png');

  return (
    <div>
       <img alt="RLObserver" src={avatar} height="35" width="45" className="main-logo"/>
    </div>
  )
}


/*

  <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }}>
    <div className="Tilt-inner">
      <span role='img' aria-label='logo'>👽</span>
    </div>
  </Tilt>

*/