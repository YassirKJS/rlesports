import React, { Component } from 'react';
import Card from './Card';
import '../sass/main.scss';

class CardList extends Component {

    render() {
        const cars = this.props.cars;

        //FILTER
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

        //SORTING
        const selectedSort = this.props.selectedSort;
        if (selectedSort === 'name') {
            //SORT BY NAME
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByName.sort(function (a, b) {
                    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            } else {
                filteredCarsByName.sort(function (a, b) {
                    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB) //sort string descending
                        return 1;
                    if (nameA > nameB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        else if (selectedSort === 'hitbox') {
            //SORT BY HITBOX
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByName.sort(function(a, b){
                    const hitboxA = a.hitbox.toLowerCase(), hitboxB = b.hitbox.toLowerCase();
                    if (hitboxA < hitboxB) //sort string ascending
                        return -1;
                    if (hitboxA > hitboxB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByName.sort(function(a, b){
                    const hitboxA = a.hitbox.toLowerCase(), hitboxB = b.hitbox.toLowerCase();
                    if (hitboxA < hitboxB) //sort string descending
                        return 1;
                    if (hitboxA > hitboxB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        else if (selectedSort === 'attribute') {
            //SORT BY ATTRIBUTE
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByName.sort(function(a, b){
                    const attributeA = a.attribute.toLowerCase(), attributeB = b.attribute.toLowerCase();
                    if (attributeA < attributeB) //sort string ascending
                        return -1;
                    if (attributeA > attributeB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByName.sort(function(a, b){
                    const attributeA = a.attribute.toLowerCase(), attributeB = b.attribute.toLowerCase();
                    if (attributeA < attributeB) //sort string descending
                        return 1;
                    if (attributeA > attributeB)
                        return -1;
                    return 0; //default return value (no sorting)
                });
            }
        }
        else if (selectedSort === 'release') {
            //SORT BY RELEASE
            if (this.props.selectedOrder === 'Ascending') {
                filteredCarsByName.sort(function(a, b){
                    const releaseA = a.released, releaseB = b.released;
                    if (releaseA < releaseB) //sort string ascending
                        return -1;
                    if (releaseA > releaseB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                filteredCarsByName.sort(function(a, b){
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
                        filteredCarsByName.map((car) => {  //(car, i)
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