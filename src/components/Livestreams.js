import React, { Component } from 'react';
import '../sass/main.scss';
import { channels } from '../resources/data/channels';
import ReactPlayer from 'react-player';

class Livestreams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='livestreams'>
                {channels.map((channel) => {
                    return ( <ReactPlayer
                        key={channel.id}
                        url={'https://www.twitch.tv/' + channel.twitch}
                        width="35rem"
                        height="20rem"
                        controls={false}
                        playing
                        playsinline
                        light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + channel.twitch + "-640x360.jpg"}
                        //onReady={console.log(channel.id + ': ' + channel.twitch + ' onReady')}
                        //onPlay={console.log(channel.id + ': ' + channel.twitch + ' onPlay')}
                        onPause={console.log(channel.id + ': ' + channel.twitch + ' onPause')}
                        //onBuffer={console.log(channel.id + ': ' + channel.twitch + ' onBuffer')}
                        //onBufferEnd={console.log(channel.id + ': ' + channel.twitch + ' onBufferEnd')}
                        //onEnded={console.log(channel.id + ': ' + channel.twitch + ' onEnded')}
                        //onError={console.log(channel.id + ': ' + channel.twitch + ' onError')}
                    />);
                })}
            </div>

        );
    }
}

export default Livestreams;
