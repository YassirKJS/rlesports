import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import './sass/main.scss';
import Header from "./components/Header";
import FilterHitbox from './components/FilterHitbox';
import FilterAttribute from './components/FilterAttribute';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            selectedHitbox: '',
            selectedAttribute: ''
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedHitboxChange = this.handleSelectedHitboxChange.bind(this);
        this.handleSelectedAttributeChange = this.handleSelectedAttributeChange.bind(this);
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

    render() {
        const cars = this.props.cars;

        return (
            <div>
                <div className="tc">
                    <Header />

                    <div className="header__search">
                        <SearchBox searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                    </div>
                    <div>
                        <FilterHitbox selectedHitbox={this.state.selectedHitbox} onSelectedHitboxChange={this.handleSelectedHitboxChange}/>
                    </div>
                    <div>
                        <FilterAttribute selectedAttribute={this.state.selectedAttribute} onSelectedAttributeChange={this.handleSelectedAttributeChange}/>
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