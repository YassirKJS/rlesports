import React, { Component } from 'react';
import '../sass/main.scss';
import { channels } from '../resources/data/channels';
import ReactPlayer from 'react-player';

class Livestreams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://api.twitch.tv/helix/streams?user_login=metsanauris', {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
            .then(response => response.json())
            .then(data => {this.setState({ data: data })});
    }

    /*async fetchLiveUsers() {
        const response = await fetch()
    }*/

    render() {
        console.log(this.state.data);

        channels.forEach(function(channel) {

        });

        return (
            <div className='livestreams'>
                {channels.map((channel) => {
                    return ( <ReactPlayer
                        key={channel.id}
                        url={'https://www.twitch.tv/' + channel.twitch}
                        width="32rem"
                        height="20rem"
                        controls={true}
                        playing
                        playsinline
                        light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + channel.twitch + "-640x360.jpg"}

                        //onReady={console.log(channel.id + ': ' + channel.twitch + ' onReady')}
                        //onPlay={console.log(channel.id + ': ' + channel.twitch + ' onPlay')}
                        //onPause={console.log(channel.id + ': ' + channel.twitch + ' onPause')}
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
