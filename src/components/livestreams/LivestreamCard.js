import React, { Component } from 'react';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import ReactPlayer from "react-player";


class LivestreamCard extends Component {
    render() {
        const channel = this.props.channel;
        const data = this.props.data;
        const id = channel.id;
        const ign = channel.ign;
        const twitch = channel.twitch;
        const twitter = channel.twitter;
        const avatar = require('../../resources/imgs/players/' + ign + '.png');

        let title = "Channel is currently offline";
        let status = "OFFLINE";
        data.forEach(function(data_) {
            if (data_.user_name.toLowerCase() === twitch.toLowerCase()) {
                title = data_.title;
                status = "LIVE";
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

                <div className="livestream__navigation">
                    <input type="checkbox" class="livestream__navigation--checkbox"></input>

                    <span class="livestream__navigation--icon">&nbsp;</span>
                </div>

                <div className="channel">
                    <a className="channel__img-link" href={'https://www.twitch.tv/' + twitch} target="_blank">
                        <img alt="avatar" src={avatar} height="250" width="250" className="channel__img"/>
                    </a>
                    <div className="channel__title">
                        <span>{title}</span>
                    </div><br />
                    <span className="channel__name">{ign}</span>
                </div>
            </div>
        );
    }
}

export default LivestreamCard;