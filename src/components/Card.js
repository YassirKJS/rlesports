import React, { Component } from 'react';

class Card extends Component {
    render() {
        const car = this.props.car;
        const name = car.name;
        const hitbox = car.hitbox;
        const released = car.released;
        const attributes = car.attributes;
        const icons = require('../resources/imgs/' + name + '_body_icon.webp');

        return (
            <div className="tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="cars" src={icons} height="250" width="250" />
                <div>
                    <h2 className="gold">{name}</h2>
                </div>
            </div>
        );
    }
}

export default Card;