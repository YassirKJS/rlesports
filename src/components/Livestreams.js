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
                fetch('https://api.twitch.tv/helix/streams' +
                    '?user_login=' + channels[0].twitch +
                    '&user_login='+ channels[1].twitch +
                    '&user_login=greazymeister' + channels[2].twitch +
                    '&user_login=mognus1' + channels[3].twitch +
                    '&user_login=snaski' + channels[4].twitch +
                    '&user_login=kuxir97' + channels[5].twitch +
                    '&user_login=speed_rl' + channels[6].twitch +
                    '&user_login=al0t97' + channels[7].twitch +
                    '&user_login=' + channels[8].twitch +
                    '&user_login=' + channels[9].twitch +
                    '&user_login=' + channels[10].twitch +
                    '&user_login=' + channels[11].twitch +
                    '&user_login=' + channels[12].twitch +
                    '&user_login=' + channels[13].twitch +
                    '&user_login=' + channels[14].twitch +
                    '&user_login=' + channels[15].twitch +
                    '&user_login=' + channels[16].twitch +
                    '&user_login=' + channels[17].twitch +
                    '&user_login=' + channels[18].twitch +
                    '&user_login=' + channels[19].twitch +
                    '&user_login=' + channels[20].twitch +
                    '&user_login=' + channels[21].twitch +
                    '&user_login=' + channels[22].twitch +
                    '&user_login=' + channels[23].twitch +
                    '&user_login=' + channels[24].twitch +
                    '&user_login=' + channels[25].twitch +
                    '&user_login=' + channels[26].twitch +
                    '&user_login=' + channels[27].twitch +
                    '&user_login=' + channels[28].twitch +
                    '&user_login=' + channels[29].twitch +
                    '&user_login=' + channels[30].twitch +
                    '&user_login=' + channels[31].twitch +
                    '&user_login=' + channels[32].twitch +
                    '&user_login=' + channels[33].twitch +
                    '&user_login=' + channels[34].twitch +
                    '&user_login=' + channels[35].twitch +
                    '&user_login=' + channels[36].twitch +
                    '&user_login=' + channels[37].twitch +
                    '&user_login=' + channels[38].twitch +
                    '&user_login=' + channels[39].twitch +
                    '&user_login=' + channels[40].twitch +
                    '&user_login=' + channels[41].twitch +
                    '&user_login=' + channels[42].twitch +
                    '&user_login=' + channels[43].twitch +
                    '&user_login=' + channels[44].twitch +
                    '&user_login=' + channels[45].twitch +
                    '&user_login=' + channels[46].twitch +
                    '&user_login=' + channels[47].twitch +
                    '&user_login=' + channels[48].twitch,
                    {headers: {'Client-ID':'u6fhve63ljgmw1qz1dyck62x7tcpn2'}} )
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

        this.state.data.forEach(function(object) {
            console.log(object.user_name);
            return (<div>{object.user_name}</div>)
        });

        console.log('This happens 8th - after I get data.');
        return (
            <div>
                <p>Got some data!</p>
                <p>There are {this.state.data.length} player(s) live!</p>
                {/*<p>{this.state.data[0].user_name}</p>
                <p>{this.state.data[0].title}</p>*/}



                <div className='livestreams'>
                    {channels.map((channel) => {
                        return (
                            <div>
                                <div className='livestream-card'>
                                    <ReactPlayer
                                        className="livestream-player"
                                        key={channel.id}
                                        url={'https://www.twitch.tv/' + channel.twitch}
                                        width="30rem"
                                        height="20rem"
                                        controls={true}
                                        playing
                                        playsinline
                                        light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + channel.twitch + "-640x360.jpg"}
                                    />
                                    <div className="channel">
                                        <img alt="cars" src={require('../resources/imgs/players/' + channel.ign + '.png')} height="250" width="250" className="channel__img"/>
                                        <span className="channel__title">{this.state.data[0].title}</span><br />
                                        <span className="channel__name">{channel.ign}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Livestreams;
