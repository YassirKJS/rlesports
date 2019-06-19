import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const cars = this.props.cars;
        const filteredCars = cars.filter(car => {
            return car.name.toLowerCase().includes(this.props.searchText.toLowerCase());
        });

        return (
            <div>
                {
                    filteredCars.map((car) => {  //(car, i)
                        return ( <Card key={car.id} car={car} /> );
                    })
                }
            </div>
        );
    }
}

export default CardList;