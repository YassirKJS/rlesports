import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import './sass/main.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    render() {
        const cars = this.props.cars;

        return (
            <div>
                <div className="tc">
                    {/* <h1 className="f2 gold">Rocket League Esports</h1> */}
                    <header>
                        Header goes here
                    </header>

                    <header className="header__search">
                        <SearchBox searchText={this.state.searchText}
                                   onSearchTextChange={this.handleSearchTextChange} />
                    </header>

                    <CardList cars={cars}
                              searchText={this.state.searchText} />
                </div>
            </div>
        );
    }
}

export default App;
