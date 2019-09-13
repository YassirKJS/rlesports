import React, { Component } from 'react'

/* react-twitter-embed */
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Loader from 'react-loader-spinner'
//import Skeleton from 'react-loading-skeleton';
//import FacebookLoading from 'react-facebook-loading';

class LivetweetCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: null,
        };
    }

    componentWillMount(){
        this.setState({loading: true}); //optional 
     }

    componentDidMount() {
        this.setState({loading: false}) 
    }


    TwitterTimeline(props) {
        return (
            <div className='livetweet-card'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={props.screenName}
                    options={{height: 800}}
                    theme="dark"
                    noHeader
                    noFooter
                    borderColor="#9acd32"
                />
            </div>
        )
    }

    render() {
        const channel = this.props.channel;
        const twitter = channel.twitter;
        //const avatar = require('../../resources/imgs/players/' + ign + '.png');

        if (this.state.loading === true) {
            console.log('loading...');
            return <Loader
                        type="RevolvingDot"
                        color="#9acd32"
                        height={100}
                        width={100}
                        //timeout={4000} //3 secs
                    />;
        }

        
        if (this.state.loading === false) {
            console.log('loaded.');
            return (
                <this.TwitterTimeline screenName={twitter}/>
            )
        }

    }
}

export default LivetweetCard;





/*


render() {
        const channel = this.props.channel;
        //const id = channel.id;
        //const ign = channel.ign;
        const twitter = channel.twitter;
        //const avatar = require('../../resources/imgs/players/' + ign + '.png');

        return (
            <div className='livetweet-card'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={twitter}
                    options={{height: 800}}
                    theme="dark"
                    noHeader
                    noFooter
                    //noScrollbar
                    borderColor="#9acd32"
                />
            </div>
        )
    }


*/