import React, { Component } from 'react';
import ReactRain from 'react-rain-animation';
import { Knob } from "react-rotary-knob";
import "react-rain-animation/lib/style.css"; 
import * as skins from 'react-rotary-knob-skin-pack';

//know catalog: http://react-rotary-knob-skins-preview.surge.sh/

const initVal = 25;
const knobstyle = {
  width: "5rem",
  height: "5rem",
};
 
class Rain extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      numDrops: initVal,
      knobValue: initVal
    };
  }
 
  handleChange = newValue => {
    this.setState({ knobValue: newValue });
  }
 
  onChangeEnd = () => {
    console.log(''+ this.state.numDrops);
    this.setState({ numDrops: this.state.knobValue });
  }

  pad = n => {
    if (n < 10 ) return ("00" + n);
    if ( n >= 10 && n < 100) return ("0" + n);
    if ( n >= 100) return n;
  }
 
  render() {
    //const roundedValue = this.pad(Math.round(this.state.knobValue));

    return (
      <div className='rain'>
        <div className='reactrain'>
          <ReactRain numDrops={ this.state.numDrops }/>
        </div>
        
        <div className='rain__knob'>
          <Knob 
            className="knob" 
            min={0} 
            max={800}
            style={knobstyle} 
            skin={skins.s12}
            unlockDistance={20}

            onChange={ this.handleChange }
            onEnd={ this.onChangeEnd }
            value={ this.state.knobValue }
          />  
        </div>
      </div>
    );
  }
}
 
export default Rain;