import React, { Component } from 'react';
import '../../sass/main.scss';
import LivestreamCard from "./LivestreamCard";

class LivestreamsList extends Component {

    render() {
        const channels = this.props.channels;
        const data = this.props.data;

        return (
            <div>
                <div className="livestreams">
                    {
                        channels.map((channel) => {  //(car, i)
                            return ( <LivestreamCard key={channel.id} channel={channel} data={data}/> );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LivestreamsList;