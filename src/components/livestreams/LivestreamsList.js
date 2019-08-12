import React, { Component } from 'react';
import '../../sass/main.scss';
import LivestreamCard from "./LivestreamCard";

class LivestreamsList extends Component {

    render() {
        const channels = this.props.channels;
        const data = this.props.data;

        // Filter by ign
        let filteredChannelsByName = [];
        let selectedChannels = this.props.searchText;
        let nameValues = [];
        for(let i = 0; i < selectedChannels.length; i++) {
            if (selectedChannels[i].value === 'All') {
                filteredChannelsByName = channels;
            }
            else {
                nameValues.push(selectedChannels[i].value);
                for(let j = 0; j < nameValues.length; j++) {
                    channels.forEach(function(channel) {
                        if (channel.ign === nameValues[j]) {
                            //check that the pushed value is unique
                            if (!filteredChannelsByName.includes(channel)) {
                                filteredChannelsByName.push(channel)
                            }
                        }
                    });
                }
            }
        }

        // no name selected condition
        if(filteredChannelsByName.length === 0) filteredChannelsByName = channels;

        return (
            <div>
                <div className="livestreams">
                    {
                        filteredChannelsByName.map((channel) => {  //(car, i)
                            return ( <LivestreamCard key={channel.id} channel={channel} data={data}/> );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LivestreamsList;