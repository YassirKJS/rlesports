import React, { Component } from 'react';
import '../../sass/main.scss';
import LivestreamCard from "./LivestreamCard";

class LivestreamsList extends Component {

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
        let selectedTeams = this.props.selectedTeam;
        console.log(selectedTeams);
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

        return (
            <div>
                <div className="livestreams">
                    {
                        filteredChannelsByTeam.map((channel) => {  //(channel, i)
                            return ( <LivestreamCard key={channel.id} channel={channel} data={data}/> );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LivestreamsList;