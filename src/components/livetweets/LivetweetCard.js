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
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={twitter}
                    options={{height: 450}}
                    theme="dark"
                    noHeader
                    noFooter
                    //noScrollbar
                    borderColor="#9acd32"
                />
            </div>
        )
    }
}

export default LivetweetCard;
