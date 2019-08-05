import React, { Component } from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import { channels } from '../resources/data/channels';
import { TwitchStream } from 'react-twitch-stream';
import ReactPlayer from 'react-player';
import TwitchPlayer from 'react-player/lib/players/Twitch';

/* styling */
import '../sass/main.scss';

/* react components */
import Header from "./Header";

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';


class Livestreams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /*componentDidMount() {
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
        });

        document.body.appendChild(script);
    }*/

    render() {
        const logo = require('../resources/imgs/drdisrespect.jpg');

        return (
            <div className='livestreams'>

            </div>
        );
    }
}

export default Livestreams;

/*
            <div>
                <div id={this.props.targetID}></div>
            </div>
 */

/*
Livestreams.defaultProps = {
    targetID: 'twitch-embed',
    width: '420',
    height: '240',
    channel: 'talk2megooseman',
    theme: 'dark',
    layout: 'video',
    muted: true,
    autoplay: false,
};
*/

/*
                    {channels.map((channel) => {
                        return ( <ReactTwitchEmbedVideo channel={channel.twitch} layout="video" width="420" height="240" theme="dark" muted={true} autoplay={true}/> );
                    })}

                    <ReactTwitchEmbedVideo channel="talk2megooseman" layout="video" width="420" height="240" theme="dark" muted={true} autoplay={true}/>
                    <ReactTwitchEmbedVideo channel="johnnyboi_i" layout="video" width="420" height="240" theme="dark" muted={true} autoplay={false}/>
 */


/*
with cook pete's ReactPlayer / TwitchPlayer

                {channels.map((channel) => {
                    return ( <ReactPlayer
                                key={channel.id}
                                url={'https://www.twitch.tv/' + channel.twitch}
                                width={420}
                                height={240}
                                controls={false}
                                playing
                                playsinline
                                light={logo}
                                //onReady={console.log(channel.id + ': ' + channel.twitch + ' onReady')}
                                //onPlay={console.log(channel.id + ': ' + channel.twitch + ' onPlay')}
                                onPause={console.log(channel.id + ': ' + channel.twitch + ' onPause')}
                                //onBuffer={console.log(channel.id + ': ' + channel.twitch + ' onBuffer')}
                                //onBufferEnd={console.log(channel.id + ': ' + channel.twitch + ' onBufferEnd')}
                                //onEnded={console.log(channel.id + ': ' + channel.twitch + ' onEnded')}
                                //onError={console.log(channel.id + ': ' + channel.twitch + ' onError')}
                            />);
                })}
 */

/*
with twitch embed

    componentDidMount() {
        let embed;

        // <script></script>
        const script = document.createElement('script');

        // <script src="https://embed.twitch.tv/embed/v1.js"></script>
        script.setAttribute(
            'src',
            'https://embed.twitch.tv/embed/v1.js'
        );

        // <script>
        //      new Twitch.Embed("twitch-embed", {
        //         width: 854,
        //         height: 480,
        //         channel: "monstercat"
        //       });
        // </script>
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed("twitch-embed", {
                width: 440,
                height: 260,
                channel: "monstercat",
                layout: "video",
                autoplay: false,
                muted: true,
            });

            let player;
            embed.addEventListener(window.Twitch.Embed.VIDEO_READY, function() {
                console.log('The video is ready');
                player = embed.getPlayer();
            });

            embed.addEventListener(window.Twitch.Embed.VIDEO_PLAY, function() {
                console.log('The video started playing');
            });


        });


        document.body.appendChild(script);
    }

    render() {
        return (
            <div className='livestreams'>
                <div id="twitch-embed" className='livestreams'></div>
                <div dangerouslySetInnerHTML={ createMarkup() } />
            </div>
    );
}
 */

/*
with iframe

const iframe = '<iframe src="https://player.twitch.tv/?channel=monstercat&muted=true" width="540" height="450" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>';
function createMarkup() {
    return {__html: iframe};
}

    render() {
        return (
            <div className='livestreams'>
                <div dangerouslySetInnerHTML={ createMarkup() } />
            </div>
    );

 */