import React, { Component } from 'react';
import { channels } from '../resources/data/channels';
import SearchBox from "./Livetweets/SearchBox";
import FilterTeam from "./Livetweets/FilterTeam";
import LivetweetsList from "./Livetweets/LivetweetsList";
import TimelineList from "./Livetweets/TimelineList";
import Layout from './Layout/Layout';

class Livetweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: [{value: 'All', label: 'All'}],
            selectedTeam: [{value: 'All', label: 'All'}],
        };
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedTeamChange = this.handleSelectedTeamChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedTeamChange(newSelectedTeam) {
        this.setState({selectedTeam: newSelectedTeam});
    }

    render() {
        return (
            <Layout>                                
                <div className="filter">
                    <SearchBox channels={channels} searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                    <FilterTeam channels={channels} selectedTeam={this.state.selectedTeam} onSelectedTeamChange={this.handleSelectedTeamChange} />
                    <img alt='' src={require('../resources/imgs/design/rectangle-side-2-1-2.png')} className='filter--bg-212'/>
                    <img alt='' src={require('../resources/imgs/design/rectangle-side-2-1.png')} className='filter--bg-211'/>  
                </div>

                <div className="livetweets">
                    <TimelineList />
                    <LivetweetsList channels={channels} searchText={this.state.searchText} selectedTeam={this.state.selectedTeam}/>
                </div>
            </Layout>
        );
    }
}

export default Livetweets;

// <LivetweetsList channels={channels} searchText={this.state.searchText} selectedTeam={this.state.selectedTeam}/>