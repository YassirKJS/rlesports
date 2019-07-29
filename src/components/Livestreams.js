import React, { Component } from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

/* styling */
import '../sass/main.scss';

/* react components */
import Header from "./Header";

class Livestreams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div>
                <div className="tc">
                    <span>Livestreams here</span>
                    <ReactTwitchEmbedVideo channel="talk2megooseman" layout="video" width="420" height="240" theme="dark" muted={true} autoplay={true}/>
                    <ReactTwitchEmbedVideo channel="rivalesports" layout="video" width="420" height="240" theme="dark" muted={true} autoplay={false}/>
                </div>
            </div>
        );
    }
}

export default Livestreams;
