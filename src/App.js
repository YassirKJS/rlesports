import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'batmo'
        };
    }

    render() {
        const cars = this.props.cars;

        return (
            <div className="tc">
                <h1 className="f2 gold">Rocket Powered Battle Cars</h1>
                <SearchBox searchText={this.state.searchText} />
                <CardList cars={cars}
                          searchText={this.state.searchText} />
            </div>
        );
    }
}

export default App;
