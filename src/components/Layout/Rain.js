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
    console.log(this.state.numDrops);
    this.setState({ numDrops: this.state.knobValue });
  }
 
  render() {
    return (
      <div className='rain'>
        <div className='reactrain'>
          <ReactRain numDrops={ this.state.numDrops }/>
        </div>
        
 
        <Knob 
          className="knob" 
          min={0} 
          max={500}
          style={knobstyle} 
          skin={skins.s12}
          unlockDistance={50}

          onChange={ this.handleChange }
          onEnd={ this.onChangeEnd }
          value={ this.state.knobValue }
        /> 
      </div>
    );
  }
}
 
export default Rain;