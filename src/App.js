import React, { Component } from 'react';
import { cars } from './resources/data/cars';

/* styling */
import './App.css';
import './sass/main.scss';

/* react components */
import CardList from './components/Cars/CardList';
import SearchBox from './components/Sorting/SearchBox';
import FilterHitbox from './components/Sorting/FilterHitbox';
import FilterAttribute from './components/Sorting/FilterAttribute';
import Sorter from './components/Sorting/Sorter';
import Orderer from './components/Sorting/Orderer';
import Layout from './components/Layout/Layout';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: [{value: 'All', label: 'All'}],
            selectedHitbox: [{value: 'All', label: 'All'}],
            selectedAttribute: [{value: 'All', label: 'All'}],
            selectedSort: {label: 'Name', value: 'name'}, //'name',
            selectedOrder: {label: 'Ascending Order', value: 'Ascending'}, //'Ascending'
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedHitboxChange = this.handleSelectedHitboxChange.bind(this);
        this.handleSelectedAttributeChange = this.handleSelectedAttributeChange.bind(this);
        this.handleSelectedSortChange = this.handleSelectedSortChange.bind(this);
        this.handleSelectedOrderChange = this.handleSelectedOrderChange.bind(this);
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

    handleSelectedOrderChange(newSelectedOrder) {
        this.setState({selectedOrder: newSelectedOrder});
    }

    render() {
      const banner_rectangle_side_211 = require('./resources/imgs/design/rectangle-side-2-1.png');
      const banner_rectangle_side_212 = require('./resources/imgs/design/rectangle-side-2-1-2.png');

      return (
        <Layout>
          <div className="filter">
              <SearchBox cars={cars} searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
              <FilterHitbox selectedHitbox={this.state.selectedHitbox} onSelectedHitboxChange={this.handleSelectedHitboxChange} />
              <FilterAttribute selectedAttribute={this.state.selectedAttribute} onSelectedAttributeChange={this.handleSelectedAttributeChange} />
              <Sorter selectedSort={this.state.selectedSort} onSelectedSortChange={this.handleSelectedSortChange} />
              <Orderer selectedOrder={this.state.selectedOrder} onSelectedOrderChange={this.handleSelectedOrderChange} />
              <img alt='' src={banner_rectangle_side_212} className='filter--bg-212'/>
              <img alt='' src={banner_rectangle_side_211} className='filter--bg-211'/>  
          </div>
          <CardList cars={cars} searchText={this.state.searchText} selectedHitbox={this.state.selectedHitbox} selectedAttribute={this.state.selectedAttribute} selectedSort={this.state.selectedSort} selectedOrder={this.state.selectedOrder}/>
        </Layout>                    
      );
    }
}

export default App;


/* <h1 className="f2 gold">Rocket League Esports</h1> */