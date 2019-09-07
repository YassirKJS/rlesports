import React, { Component } from 'react'

/* react-twitter-embed */
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class TimelineList extends Component {
    render() {
        return (
            <div className="timelineList centerContent">
                <div className="selfCenter standardWidth">
                    <TwitterTimelineEmbed
                        sourceType="list"
                        ownerScreenName="RlesportsF"
                        slug="rlesports-feed"
                        options={{height: '100vh'}}
                        theme="dark"
                        noHeader
                        noFooter
                        borderColor="#9acd32" //#734780
                    />
                </div>
            </div>
        )
    }
}
