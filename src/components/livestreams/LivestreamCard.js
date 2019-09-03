import React, { Component } from 'react';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from "react-player";


class LivestreamCard extends Component {
    render() {
        const channel = this.props.channel;
        const data = this.props.data;
        const id = channel.id;
        const ign = channel.ign;
        const twitch = channel.twitch;
        const avatar = require('../../resources/imgs/players/' + ign + '.png');

        let title = "Channel is currently offline";
        data.forEach(function(data_) {
            if (data_.user_name.toLowerCase() === twitch.toLowerCase()) {
                title = data_.title;
            }
        });

        return (
            <div className='livestream-card'>
                <ReactPlayer
                    className="livestream-player"
                    key={id}
                    url={'https://www.twitch.tv/' + twitch}
                    width="100%"
                    height="23rem"
                    controls={true}
                    playing
                    playsinline
                    light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + twitch + "-640x360.jpg"}
                />
                <div className="channel">
                    <a className="channel__img-link" href={'https://www.twitch.tv/' + twitch} target="_blank">
                        <img alt="avatar" src={avatar} height="250" width="250" className="channel__img"/>
                    </a>
                    <span className="channel__title">{title}</span><br />  {/* {data[0].title} */}
                    <span className="channel__name">{ign}</span>
                    <span>status: {data === null? 'OFFLINE' : 'LIVE'}</span>
                </div>
            </div>
        );
    }
}

export default LivestreamCard;