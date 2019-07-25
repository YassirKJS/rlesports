import React, { Component } from 'react';
import Card from './Card';
import '../sass/main.scss';

class CardList extends Component {

    render() {
        const cars = this.props.cars;
        /*console.log('cardlist start');
        this.props.selectedHitbox.map(hitbox => {
            return (console.log(hitbox.value));
        });
        console.log('cardlist end');
         */

        //FILTER
        /*const filteredCarsByAttribute = cars.filter(car => {
            if (this.props.selectedAttribute === 'All') return cars;
            return car.attribute.includes(this.props.selectedAttribute)
        });*/

        let filteredCarsByAttribute = [];
        let someArray = this.props.selectedAttribute;
        let values = [];
        for(let i = 0; i < someArray.length; i++) {
            if (someArray[i].value === 'All') {
                filteredCarsByAttribute = cars;
            }
            else {
                values.push(someArray[i].value);
                for(let j = 0; j < values.length; j++) {
                    cars.forEach(function(car) {
                        if (car.attribute === values[j]) {
                            //check that the pushed value is unique
                            if (!filteredCarsByAttribute.includes(car)) {
                                filteredCarsByAttribute.push(car)
                            }
                        }
                    });
                }
            }
        }

        let filteredCarsByHitbox = [];
        let selectedHitboxes = this.props.selectedHitbox;
        let hitboxValues = [];
        for(let i = 0; i < selectedHitboxes.length; i++) {
            if (selectedHitboxes[i].value === 'All') {
                filteredCarsByHitbox = filteredCarsByAttribute;
            }
            else {
                hitboxValues.push(selectedHitboxes[i].value);
                for(let j = 0; j < hitboxValues.length; j++) {
                    filteredCarsByAttribute.forEach(function(car) {
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
        /*const filteredCarsByHitbox = cars.filter(car => {
            if (someArray[0].value === 'All') return cars;
            return car.hitbox.includes(someArray[0].value)
        });*/

        /*const filteredCarsByName = cars.filter(car => {
            if (this.props.selectedHitbox[0].value === 'All') return cars;
            return car.hitbox.toLowerCase().includes(this.props.selectedHitbox[0].value.toLowerCase())
        });*/
        /*const filteredCarsByName = filteredCarsByHitbox.filter(car => {
            return car.name.toLowerCase().includes(this.props.searchText.toLowerCase())
        });*/

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