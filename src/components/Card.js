import React, { Component } from 'react';
import '../sass/main.scss';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar, faClock } from '@fortawesome/free-solid-svg-icons';


class Card extends Component {
    render() {
        const car = this.props.car;
        const name = car.name;
        const hitbox = car.hitbox;
        const released = car.released;
        const attributes = car.attributes;
        const icons = require('../resources/imgs/cars/' + name + '_body_icon.webp');

        return (
            <div className="card"> {/*tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5*/}
                <div className="card__img-container">
                    <img alt="cars" src={icons} height="250" width="250" className="card__img"/>
                </div>
                <div className="card__heading">
                    {name}
                </div>
                <div className="card__hitbox white">
                    <FontAwesomeIcon icon={faCar} className="card__hitbox-img gold" />
                    <p>{hitbox}</p>
                </div>
                <div className="card__attributes white">
                    <FontAwesomeIcon icon={faStar} className="card__attributes-img gold" />
                    <p>{attributes}</p>
                </div>
                <div className="card__released white">
                    <FontAwesomeIcon icon={faClock} className="card__released-img gold" />
                    <p>{released}</p>
                </div>
            </div>
        );
    }
}

export default Card;