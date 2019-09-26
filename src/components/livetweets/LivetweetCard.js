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

        };
    }

    TwitterTimeline(props) {
        return (
            <div className='livetweet-card' >
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={props.screenName}
                    options={{height: 800}}
                    theme="dark"
                    noHeader
                    noFooter
                    noScrollbar
                    borderColor="#ffba08" // var(--color-brown-dark) 
                />
            </div>
        )
    }

    render() {
        const channel = this.props.channel;
        const twitter = channel.twitter;
        //const avatar = require('../../resources/imgs/players/' + ign + '.png');
    
        return (
          <div>
            <this.TwitterTimeline screenName={twitter}/>
          </div>
        );
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