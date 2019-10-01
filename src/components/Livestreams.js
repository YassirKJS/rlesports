import React, { Component } from 'react';
//import '../sass/main.scss';
import { channels } from '../resources/data/channels';
import SearchBox from "./livestreams/SearchBox";
import LivestreamsList from "./livestreams/LivestreamsList";
import FilterTeam from "./livestreams/FilterTeam";
import Layout from './Layout/Layout';
import TimelineList from "./livestreams/TimelineList";

import Loader from 'react-loader-spinner';

class Livestreams extends Component {
    constructor(props) {
        super(props);

        console.log('This happens 1st: Constructor');

        this.state = {
            loading: 'initial',
            data: [],
            searchText: [{value: 'All', label: 'All'}],
            selectedTeam: [{value: 'All', label: 'All'}],
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedTeamChange = this.handleSelectedTeamChange.bind(this);
    }

    loadData() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('This happens 6th (after 2 seconds): Data loaded');
                //resolve('This is my data.');
                fetch('https://api.twitch.tv/helix/streams' +
                    '?user_login=' + channels[0].twitch +
                    '&user_login='+ channels[1].twitch +
                    '&user_login=' + channels[2].twitch +
                    '&user_login=' + channels[3].twitch +
                    '&user_login=' + channels[4].twitch +
                    '&user_login=' + channels[5].twitch +
                    '&user_login=' + channels[6].twitch +
                    '&user_login=' + channels[7].twitch +
                    '&user_login=' + channels[8].twitch +
                    '&user_login=' + channels[9].twitch +
                    '&user_login=' + channels[10].twitch +
                    '&user_login=' + channels[11].twitch +
                    '&user_login=' + channels[12].twitch +
                    '&user_login=' + channels[13].twitch +
                    '&user_login=' + channels[14].twitch +
                    '&user_login=' + channels[15].twitch +
                    '&user_login=' + channels[16].twitch +
                    '&user_login=' + channels[17].twitch +
                    '&user_login=' + channels[18].twitch +
                    '&user_login=' + channels[19].twitch +
                    '&user_login=' + channels[20].twitch +
                    '&user_login=' + channels[21].twitch +
                    '&user_login=' + channels[22].twitch +
                    '&user_login=' + channels[23].twitch +
                    '&user_login=' + channels[24].twitch +
                    '&user_login=' + channels[25].twitch +
                    '&user_login=' + channels[26].twitch +
                    '&user_login=' + channels[27].twitch +
                    '&user_login=' + channels[28].twitch +
                    '&user_login=' + channels[29].twitch +
                    '&user_login=' + channels[30].twitch +
                    '&user_login=' + channels[31].twitch +
                    '&user_login=' + channels[32].twitch +
                    '&user_login=' + channels[33].twitch +
                    '&user_login=' + channels[34].twitch +
                    '&user_login=' + channels[35].twitch +
                    '&user_login=' + channels[36].twitch +
                    '&user_login=' + channels[37].twitch +
                    '&user_login=' + channels[38].twitch +
                    '&user_login=' + channels[39].twitch +
                    '&user_login=' + channels[40].twitch +
                    '&user_login=' + channels[41].twitch +
                    '&user_login=' + channels[42].twitch +
                    '&user_login=' + channels[43].twitch +
                    '&user_login=' + channels[44].twitch +
                    '&user_login=' + channels[45].twitch +
                    '&user_login=' + channels[46].twitch +
                    '&user_login=' + channels[47].twitch +
                    '&user_login=' + channels[48].twitch +
                    '&user_login=' + channels[49].twitch +
                    '&user_login=' + channels[50].twitch,
                    {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
                    .then(response => response.json())
                    .then(data => {resolve(data.data) ; /*console.log(data.data)*/});
            }, .500); //.500
        });

        console.log('This happens 4th: Loading data');

        return promise;
    }


    componentDidMount() {
      /*
      fetch('https://api.twitch.tv/helix/streams?user_login=monstercat, {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
          .then(response => response.json())
          .then(data => {this.setState({ data: data })});

      console.log('componentDidMount');
      */

      console.log('This happens 3rd: ComponentDidMount');

      this.setState({ loading: 'true' });
      this.loadData()
          .then((data) => {
              console.log('This happens 7th: ComponentDidMount/this.loadData');
              if (data === undefined || data.length === 0) {
                  console.log("data empty");
                  this.setState({
                      data: [],
                      loading: 'false'
                  });
              }
              else {
                  console.log("data not empty");
                  this.setState({
                      data: data,
                      loading: 'false'
                  });
              }
          });
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedTeamChange(newSelectedTeam) {
        this.setState({selectedTeam: newSelectedTeam});
    }


    render() {
        const banner_rectangle_side_211 = require('../resources/imgs/design/rectangle-side-2-1.png');
        const banner_rectangle_side_212 = require('../resources/imgs/design/rectangle-side-2-1-2.png');

        if (this.state.loading === 'initial') {
            console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
            return <h2>Intializing...</h2>;
        }

        if (this.state.loading === 'true') {
            console.log('This happens 5th - when waiting for data.');
            return (
              <Layout>
                <Loader
                  className='loader'
                  type="Oval"
                  color="white"
                  height={100}
                  width={100}
                  //timeout={4000} //3 secs
                />
              </Layout>                    
            );
        }

        this.state.data.forEach(function(object) {
            //console.log(object.user_name);
            return (<div>{object.user_name}</div>)
        });

        console.log('This happens 8th - after I get data.');

        return (
            <Layout>
                <div className="filter">
                    <SearchBox channels={channels} searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                    <FilterTeam channels={channels} selectedTeam={this.state.selectedTeam} onSelectedTeamChange={this.handleSelectedTeamChange} />     
                    <img alt='' src={banner_rectangle_side_212} className='filter--bg-212'/>
                    <img alt='' src={banner_rectangle_side_211} className='filter--bg-211'/>               
                </div>

                <div className="livestreams--content">
                  <TimelineList />
                  <LivestreamsList channels={channels} data={this.state.data} searchText={this.state.searchText} selectedTeam={this.state.selectedTeam}/>
                </div>
            </Layout>
        );
    }
}

export default Livestreams;
