import React, { Component } from 'react';
import Card from './Card';
import '../sass/main.scss';

class CardList extends Component {
    render() {
        const cars = this.props.cars;

        const filteredCardByHitbox = cars.filter(car => {
            return car.hitbox.toLowerCase().includes(this.props.selectedHitbox.toLowerCase())
        });
        const filteredCarsByName = filteredCardByHitbox.filter(car => {
            return car.name.toLowerCase().includes(this.props.searchText.toLowerCase())
        });

        return (
            <div className="cardlist">
                {
                    filteredCarsByName.map((car) => {  //(car, i)
                        return ( <Card key={car.id} car={car} /> );
                    })
                }
            </div>
        );
    }
}

export default CardList;