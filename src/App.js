import React, { Component } from 'react';

/* styling */
import './App.css';
import './sass/main.scss';

/* react components */
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Header from "./components/Header";
import FilterHitbox from './components/FilterHitbox';
import FilterAttribute from './components/FilterAttribute';
import Sorter from './components/Sorter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            selectedHitbox: '',
            selectedAttribute: '',
            selectedSort: ''
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedHitboxChange = this.handleSelectedHitboxChange.bind(this);
        this.handleSelectedAttributeChange = this.handleSelectedAttributeChange.bind(this);
        this.handleSelectedSortChange = this.handleSelectedSortChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedHitboxChange(newSelectedHitbox) {
        this.setState({selectedHitbox: newSelectedHitbox});
    }

    handleSelectedAttributeChange(newSelectedAttribute) {
        this.setState({selectedAttribute: newSelectedAttribute});
    }

    handleSelectedSortChange(newSelectedSort) {
        this.setState({selectedSort: newSelectedSort});
    }

    render() {
        const cars = this.props.cars;

        return (
            <div>
                <div className="tc">
                    <Header />

                    <div className="filter">
                        <SearchBox searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                        <FilterHitbox selectedHitbox={this.state.selectedHitbox} onSelectedHitboxChange={this.handleSelectedHitboxChange}/>
                        <FilterAttribute selectedAttribute={this.state.selectedAttribute} onSelectedAttributeChange={this.handleSelectedAttributeChange}/>
                        <Sorter selectedSort={this.state.selectedSort} onSelectedSortChange={this.handleSelectedSortChange}/>
                    </div>


                    <CardList cars={cars}
                              searchText={this.state.searchText} selectedHitbox={this.state.selectedHitbox} selectedAttribute={this.state.selectedAttribute}/>
                </div>
            </div>
        );
    }
}

export default App;


/* <h1 className="f2 gold">Rocket League Esports</h1> */