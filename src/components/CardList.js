import React, { Component } from 'react';
import Card from './Card';
import '../sass/main.scss';

class CardList extends Component {
    render() {
        const cars = this.props.cars;

        const filteredCardByAttribute = cars.filter(car => {
            if (this.props.selectedAttribute === 'All') return cars;
            return car.attribute.includes(this.props.selectedAttribute)
        });
        const filteredCardByHitbox = filteredCardByAttribute.filter(car => {
            if (this.props.selectedHitbox === 'All') return cars;
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