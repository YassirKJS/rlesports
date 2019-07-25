import React, { Component } from 'react';
import Card from './Card';
import '../sass/main.scss';

class CardList extends Component {

    render() {
        const cars = this.props.cars;

        // Filter by Name
        let filteredCarsByName = [];
        let selectedCars = this.props.searchText;
        let nameValues = [];
        for(let i = 0; i < selectedCars.length; i++) {
            if (selectedCars[i].value === 'All') {
                filteredCarsByName = cars;
            }
            else {
                nameValues.push(selectedCars[i].value);
                for(let j = 0; j < nameValues.length; j++) {
                    cars.forEach(function(car) {
                        if (car.name === nameValues[j]) {
                            //check that the pushed value is unique
                            if (!filteredCarsByName.includes(car)) {
                                filteredCarsByName.push(car)
                            }
                        }
                    });
                }
            }
        }

        // no name selected condition
        if(filteredCarsByName.length === 0) filteredCarsByName = cars;

        // Filter by Attribute
        let filteredCarsByAttribute = [];
        let selectedAttributes = this.props.selectedAttribute;
        let attributeValues = [];
        for(let i = 0; i < selectedAttributes.length; i++) {
            if (selectedAttributes[i].value === 'All') {
                filteredCarsByAttribute = filteredCarsByName;
            }
            else {
                attributeValues.push(selectedAttributes[i].value);
                for(let j = 0; j < attributeValues.length; j++) {
                    filteredCarsByName.forEach(function(car) {
                        if (car.attribute === attributeValues[j]) {
                            //check that the pushed value is unique
                            if (!filteredCarsByAttribute.includes(car)) {
                                filteredCarsByAttribute.push(car)
                            }
                        }
                    });
                }
            }
        }

        // no attribute selected condition
        if(filteredCarsByAttribute.length === 0) filteredCarsByAttribute = filteredCarsByName;

        // Filter by Hitbox
        let filteredCarsByHitbox = [];
        let selectedHitboxes = this.props.selectedHitbox;
        let hitboxValues = [];
        for(let i = 0; i < selectedHitboxes.length; i++) {
            if (selectedHitboxes[i].value === 'All' || selectedHitboxes.length === 0) {
                filteredCarsByHitbox = cars;
                console.log('All condition');
                console.log(selectedHitboxes);
            }
            else {
                console.log('Else condition');
                console.log(selectedHitboxes);
                hitboxValues.push(selectedHitboxes[i].value);
                for(let j = 0; j < hitboxValues.length; j++) {
                    cars.forEach(function(car) {
                        if (car.hitbox === hitboxValues[j]) {
                            //check that the pushed value is unique
                            if (!filteredCarsByHitbox.includes(car)) {
                                filteredCarsByHitbox.push(car)
                            }
                        }
                    });
                }
            }
        }

        // no hitbox selected condition
        if (filteredCarsByHitbox.length === 0) filteredCarsByHitbox = filteredCarsByAttribute;

        //SORTING
        const selectedSort = this.props.selectedSort;
        if (selectedSort === 'name') {
            //SORT BY NAME
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByHitbox.sort(function (a, b) {
                    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            } else {
                filteredCarsByHitbox.sort(function (a, b) {
                    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB) //sort string descending
                        return 1;
                    if (nameA > nameB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        if (selectedSort === 'hitbox') {
            //SORT BY HITBOX
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByHitbox.sort(function(a, b){
                    const hitboxA = a.hitbox.toLowerCase(), hitboxB = b.hitbox.toLowerCase();
                    if (hitboxA < hitboxB) //sort string ascending
                        return -1;
                    if (hitboxA > hitboxB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByHitbox.sort(function(a, b){
                    const hitboxA = a.hitbox.toLowerCase(), hitboxB = b.hitbox.toLowerCase();
                    if (hitboxA < hitboxB) //sort string descending
                        return 1;
                    if (hitboxA > hitboxB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        if (selectedSort === 'attribute') {
            //SORT BY ATTRIBUTE
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByHitbox.sort(function(a, b){
                    const attributeA = a.attribute.toLowerCase(), attributeB = b.attribute.toLowerCase();
                    if (attributeA < attributeB) //sort string ascending
                        return -1;
                    if (attributeA > attributeB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByHitbox.sort(function(a, b){
                    const attributeA = a.attribute.toLowerCase(), attributeB = b.attribute.toLowerCase();
                    if (attributeA < attributeB) //sort string descending
                        return 1;
                    if (attributeA > attributeB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        if (selectedSort === 'release') {
            //SORT BY RELEASE
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByHitbox.sort(function(a, b){
                    const releaseA = a.released, releaseB = b.released;
                    if (releaseA < releaseB) //sort string ascending
                        return -1;
                    if (releaseA > releaseB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByHitbox.sort(function(a, b){
                    const releaseA = a.released, releaseB = b.released;
                    if (releaseA < releaseB) //sort string descending
                        return 1;
                    if (releaseA > releaseB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }

        return (
            <div>
                <div className="cardlist">
                    {
                        filteredCarsByHitbox.map((car) => {  //(car, i)
                            return ( <Card key={car.id} car={car} /> );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CardList;








/*
        const hitboxes = ['Octane', 'Dominus', 'Hybrid', 'Breakout', 'Plank'];
        const breakoutHitbox = [];
        const dominusHitbox = [];
        const hybridHitbox = [];
        const octaneHitbox = [];
        const plankHitbox = [];

        filteredCarsByName.map(car => {
            switch(car.hitbox) {
                case 'Breakout':
                    return breakoutHitbox.push(car);
                case 'Dominus':
                    return dominusHitbox.push(car);
                case 'Hybrid':
                    return hybridHitbox.push(car);
                case 'Octane':
                    return octaneHitbox.push(car);
                case 'Plank':
                    return plankHitbox.push(car);
                default:
                    return 0;
            }
        });

        const Dict_hitbox_cars = {
            Breakout: breakoutHitbox,
            Dominus: dominusHitbox,
            Hybrid: hybridHitbox,
            Octane: octaneHitbox,
            Plank: plankHitbox
        };
 */

/*<div>
    {
        hitboxes.map(hitbox => {
            return (
                <div>
                    {hitbox}
                    <div className="cardlist">
                        {
                            Dict_hitbox_cars[hitbox].map((car) => {
                                return (
                                    <Card key={car.id} car={car}/>
                                );
                            })
                        }
                    </div>
                </div>
            );
        })
    }
</div>*/