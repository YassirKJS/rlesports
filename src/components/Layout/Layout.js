import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Particles params={particleOptions} className='particles' />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;









/*

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

*/