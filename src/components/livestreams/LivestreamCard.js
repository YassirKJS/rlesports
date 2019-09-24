import React, { Component } from 'react';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

        const liquipediaIcon = require('../../resources/imgs/liquipedia.png');


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
                

                <div className="livestream__navigation">
                    <input type="checkbox" className="livestream__navigation--checkbox" id={"navi-toggle-" + id}></input>
                    <label htmlFor={"navi-toggle-" + id} className="livestream__navigation--button">
                        <span className="livestream__navigation--icon">&nbsp;</span>
                    </label>

                    <div className="livestream__navigation--background">
                        <a className="livestream__navigation--item--1" href={'https://www.instagram.com/' + twitch} target="_blank" > <img alt="liquipedia" src={liquipediaIcon} /></a>
                        <a className="livestream__navigation--item--2" href={'https://www.twitch.tv/' + twitch} target="_blank" ><FontAwesomeIcon icon={faTwitch} /></a>
                        <a className="livestream__navigation--item--3" href={'https://youtube.com/' + twitter} target="_blank" ><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className="livestream__navigation--item--4" href={'https://twitter.com/' + twitter} target="_blank" ><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
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