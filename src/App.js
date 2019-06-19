import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
    render() {
        const cars = this.props.cars;

        return (
            <div className="tc">
                <h1 className="f2 gold">Rocket Powered Battle Cars</h1>
                <SearchBox />
                <CardList cars={cars} />
            </div>
        );
    }
}

export default App;
