import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const cars = this.props.cars;

        return (
            <div>
                {
                    cars.map((car) => {  //(car, i)
                        return ( <Card key={car.id} car={car} /> );
                    })
                }
            </div>
        );
    }
}

export default CardList;