import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import './sass/main.scss';
import Header from "./components/Header";
import FilterBox from './components/FilterBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            selectedHitbox: ''
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedHitboxChange = this.handleSelectedHitboxChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedHitboxChange(newSelectedHitbox) {
        this.setState({selectedHitbox: newSelectedHitbox});
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
                        <FilterBox selectedHitbox={this.state.selectedHitbox} onSelectedHitboxChange={this.handleSelectedHitboxChange}/>
                    </div>

                    <CardList cars={cars}
                              searchText={this.state.searchText} selectedHitbox={this.state.selectedHitbox}/>
                </div>
            </div>
        );
    }
}

export default App;


/* <h1 className="f2 gold">Rocket League Esports</h1> */