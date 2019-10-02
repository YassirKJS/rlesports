import React, { Component } from 'react';
//import '../sass/main.scss';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar, faClock } from '@fortawesome/free-solid-svg-icons';


class Card extends Component {
    render() {
        const car = this.props.car;
        const name = car.name;
        const hitbox = car.hitbox;
        const released = car.released;
        const attribute = car.attribute;
        const icons = require('../../resources/imgs/cars/' + name + '_body_icon.webp');

        return (
            <div className="card"> {/*tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5*/}
                <div className="card__img-container">
                    <img alt="cars" src={icons} height="250" width="250" className="card__img"/>
                </div>
                <div className="card__heading">
                    <span className="card__heading-span">{name}</span>
                </div>
                <div className="card__hitbox card__attribute">
                    <FontAwesomeIcon icon={faCar} className="card__hitbox-img" />
                    <p>{hitbox}</p>
                </div>
                <div className="card__attributes card__attribute">
                    <FontAwesomeIcon icon={faStar} className="card__attributes-img" />
                    <p>{attribute}</p>
                </div>
                <div className="card__released card__attribute">
                    <FontAwesomeIcon icon={faClock} className="card__released-img" />
                    <p>{released}</p>
                </div>
            </div>
        );
    }
}

export default Card;