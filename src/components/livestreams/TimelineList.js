import React, { Component } from 'react'

/* react-twitter-embed */
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default class TimelineList extends Component {
  render() {
    return (
        <div className="timelineList-2">
          <TwitterTimelineEmbed
              className='timelineList-2--content'
              sourceType="list"
              ownerScreenName="RlesportsF"
              slug="rlesports-feed"
              options={{height: '151.7vh'}}
              theme="dark"
              noHeader
              noFooter
              transparent
              noScrollbar
              borderColor="#82fbf6" //#734780 #9acd32 var(--color-primary)
          />
        </div>
    )
  }
}

// className="timelineList centerContent"
// className="selfCenter standardWidth"