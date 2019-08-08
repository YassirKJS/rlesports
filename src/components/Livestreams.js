import React, { Component } from 'react';
import '../sass/main.scss';
import { channels } from '../resources/data/channels';
import ReactPlayer from 'react-player';

class Livestreams extends Component {
    constructor(props) {
        super(props);

        console.log('This happens 1st: Constructor');

        this.state = {
            loading: 'initial',
            data: []
        };
    }

    loadData() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('This happens 6th (after 2 seconds): Data loaded');
                //resolve('This is my data.');
                fetch('https://api.twitch.tv/helix/streams?user_login=monstercat', {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
                    .then(response => response.json())
                    .then(data => {resolve(data.data) ; console.log(data.data)});
            }, 500);
        });

        console.log('This happens 4th: Loading data');

        return promise;
    }


    componentDidMount() {
        /*
        fetch('https://api.twitch.tv/helix/streams?user_login=monstercat, {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
            .then(response => response.json())
            .then(data => {this.setState({ data: data })});

        console.log('componentDidMount');
        */

        console.log('This happens 3rd: ComponentDidMount');

        this.setState({ loading: 'true' });
        this.loadData()
            .then((data) => {
                console.log('This happens 7th: ComponentDidMount/this.loadData');
                this.setState({
                    data: data,
                    loading: 'false'
                });
            });
    }


    render() {
        if (this.state.loading === 'initial') {
            console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
            return <h2>Intializing...</h2>;
        }

        if (this.state.loading === 'true') {
            console.log('This happens 5th - when waiting for data.');
            return <h2>Loading...</h2>;
        }

        console.log('This happens 8th - after I get data.');
        return (
            <div>
                <p>Got some data!</p>
                <p>{this.state.data[0].user_name}</p>
                <p>{this.state.data[0].title}</p>

                <div className='livestreams'>
                    {channels.map((channel) => {
                        return (
                            <div className='livestream-card'>
                                <ReactPlayer
                                    key={channel.id}
                                    url={'https://www.twitch.tv/' + channel.twitch}
                                    width="32rem"
                                    height="20rem"
                                    controls={true}
                                    playing
                                    playsinline
                                    light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + channel.twitch + "-640x360.jpg"}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Livestreams;
