import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Rain from './Rain';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Rain />      
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;



/* 
const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    "color": {
      "value": "#734780"
    }
  }
}

<Particles params={particleOptions} className='particles' /> */


