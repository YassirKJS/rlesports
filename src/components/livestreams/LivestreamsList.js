/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import '../../sass/main.scss';
import LivestreamCard from "./LivestreamCard";
//import { teams } from "../../resources/data/teams";

class LivestreamsList extends Component {

  getViewerCount(data, twitch) {
    let result = data.find(obj => {
      return obj.user_name.toLowerCase() === twitch.toLowerCase()
    })
    return result.viewer_count;
  }

  render() {
      const channels = this.props.channels;
      const data = this.props.data;

      // Filter by ign
      let filteredChannelsByIgn = [];
      let selectedChannels = this.props.searchText;
      let nameValues = [];
      for(let i = 0; i < selectedChannels.length; i++) {
          if (selectedChannels[i].value === 'All') {
              filteredChannelsByIgn = channels;
          }
          else {
              nameValues.push(selectedChannels[i].value);
              for(let j = 0; j < nameValues.length; j++) {
                  channels.forEach(function(channel) {
                      if (channel.ign === nameValues[j]) {
                          //check that the pushed value is unique
                          if (!filteredChannelsByIgn.includes(channel)) {
                              filteredChannelsByIgn.push(channel)
                          }
                      }
                  });
              }
          }
      }

      // no name selected condition
      if(filteredChannelsByIgn.length === 0) filteredChannelsByIgn = channels;

      // Filter by Team
      let filteredChannelsByTeam = [];
      let selectedTeams = this.props.selectedTeam;  // Object { value: 'xxx', label: 'xxx' }
      //console.log(selectedTeams);
      let TeamValues = [];
      for(let i = 0; i < selectedTeams.length; i++) {
          if (selectedTeams[i].value === 'All') {
              filteredChannelsByTeam = filteredChannelsByIgn;
          }
          else {
              TeamValues.push(selectedTeams[i].value);
              for(let j = 0; j < TeamValues.length; j++) {
                  filteredChannelsByIgn.forEach(function(channel) {
                      if (channel.team.includes(TeamValues[j])) {
                          //check that the pushed value is unique
                          if (!filteredChannelsByTeam.includes(channel)) {
                              filteredChannelsByTeam.push(channel)
                          }
                      }
                  });
              }
          }
      }

      // no Team selected condition
      if(filteredChannelsByTeam.length === 0) filteredChannelsByTeam = filteredChannelsByIgn;


      // Filter by Status
      let liveChannels = [];
      let offlineChannels = [];
      filteredChannelsByTeam.forEach(function(channel_) {
          data.forEach(function(data_) {
              if (data_.user_name.toLowerCase() === channel_.twitch.toLowerCase()) {
                  liveChannels.push(channel_);
              }
          });
          if (!offlineChannels.includes(channel_) && !liveChannels.includes(channel_)) {
              offlineChannels.push(channel_);
          }
      });

      //console.log(filteredChannelsByTeam);
      //console.log(data);
      //console.log(liveChannels);

      const getViewerCount = (data, twitch) => {
        let result = data.find(obj => {
          return obj.user_name.toLowerCase() === twitch.toLowerCase()
        })
        return result.viewer_count;
      }

      // Livechannels sorting by viewer_count
      liveChannels.sort(function (a, b) {
        const viewer_countA = getViewerCount(data, a.twitch), viewer_countB = getViewerCount(data, b.twitch);
        if (viewer_countA > viewer_countB) //sort descending
            return -1;
        if (viewer_countA < viewer_countB)
            return 1;
        return 0;
    });

    

      return (
          <div className="livestreamsList">
              <h1>LIVE</h1>
              <div className="livestreams">
                  {
                      liveChannels.map((channel) => {  //(channel, i)
                          return (
                              <LivestreamCard key={channel.id} channel={channel} data={data} viewerCount={getViewerCount(data, channel.twitch)}/>
                          );
                      })
                  }
              </div>

              <h1>OFFLINE</h1>
              <div className="livestreams">
                  {
                      offlineChannels.map((channel) => {  //(channel, i)
                          return (
                              <LivestreamCard key={channel.id} channel={channel} data={data}/>
                          );
                      })
                  }
              </div>
          </div>
      )
  }
}

export default LivestreamsList;

/*
                <div className="livestreams">
                    {
                        filteredChannelsByTeam.map((channel) => {  //(channel, i)
                            return (
                                <LivestreamCard key={channel.id} channel={channel} data={data}/>
                            );
                        })
                    }
                </div>
 */

/*
        console.log('filteredChannelsByTeam');
        filteredChannelsByTeam.forEach(function(channel) {
           console.log(channel);
        });

        console.log('selectedTeams');
        selectedTeams.forEach(function(team) {
            console.log(team);
        });

        //let dict = [];
 */