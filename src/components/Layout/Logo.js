import React from 'react';
import Tilt from 'react-tilt';

export default function Logo() {
  return (
    <div>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }}>
        <div className="Tilt-inner">
          <span role='img' aria-label='logo'>👽</span>
        </div>
      </Tilt>
    </div>
  )
}
