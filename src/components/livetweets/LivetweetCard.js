import React, { Component } from 'react'

class LivetweetCard extends Component {
    render() {
        const channel = this.props.channel;
        const id = channel.id;
        const ign = channel.ign;
        const twitter = channel.twitter;
        const avatar = require('../../resources/imgs/players/' + ign + '.png');

        return (
            <div className='livestream-card'>
                
            </div>
        )
    }
}

export default LivetweetCard;
