import React, { Component } from 'react';
import '../../sass/main.scss';
import LivetweetCard from './LivetweetCard';

class LivetweetsList extends Component {
    render() {
        const channels = this.props.channels;

        return (
            <div>
                {
                    channels.map((channel) => { 
                        return (
                            <LivetweetCard key={channel.id} channel={channel} />
                        )
                    })
                }
            </div>
        );
    }
}

export default LivetweetsList;