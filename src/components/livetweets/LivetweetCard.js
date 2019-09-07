import React, { Component } from 'react'

/* react-twitter-embed */
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class LivetweetCard extends Component {
    render() {
        const channel = this.props.channel;
        const id = channel.id;
        const ign = channel.ign;
        const twitter = channel.twitter;
        const avatar = require('../../resources/imgs/players/' + ign + '.png');

        return (
            <div className='livetweet-card'>
                LivetweetCard
            </div>
        )
    }
}

export default LivetweetCard;
