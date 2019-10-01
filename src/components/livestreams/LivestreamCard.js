import React, { Component } from 'react';

/* fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import ReactPlayer from "react-player";

class LivestreamCard extends Component {

  render() {
      const channel = this.props.channel;
      const data = this.props.data;
      const id = channel.id;
      const ign = channel.ign;
      const twitch = channel.twitch;
      const twitter = channel.twitter;
      const avatar = require('../../resources/imgs/players/' + ign + '.png');
      
      const banner_circle = require('../../resources/imgs/design/circle.png');
      const banner_semi_rectangle = require('../../resources/imgs/design/semi-rectangle.png');
      const banner_rectangle_inside = require('../../resources/imgs/design/rectangle-inside.png');
      const banner_rectangle_side = require('../../resources/imgs/design/rectangle-side.png');
      const banner_rectangle_side_21 = require('../../resources/imgs/design/rectangle-side-2-1.png');
      const banner_rectangle_side_22 = require('../../resources/imgs/design/rectangle-side-2-2.png');
      /*const frame_top = require('../../resources/imgs/design/frame-top.png');
      const frame_right = require('../../resources/imgs/design/frame-right.png');
      const frame_bottom = require('../../resources/imgs/design/frame-bottom.png');
      const frame_left = require('../../resources/imgs/design/frame-left.png');*/
      const frame = require('../../resources/imgs/design/TV.png');

      let viewerCount = this.props.viewerCount;

      const liquipediaIcon = require('../../resources/imgs/liquipedia.png');
      const youtubeIcon = require('../../resources/imgs/youtube.png');
      const twitchIcon = require('../../resources/imgs/twitch.png');
      const twitterIcon = require('../../resources/imgs/twitter.png');

      let title = "";
      data.forEach(function(data_) {
          if (data_.user_name.toLowerCase() === twitch.toLowerCase()) {
              title = data_.title;
          }
      });
      
      return (
        <div className='livestream-card' >
          <div className="livestream-player">
            <ReactPlayer   
                className='react-player'           
                key={id}
                url={'https://www.twitch.tv/' + twitch}
                width="94%"
                height="21.5rem"
                controls={true}
                playing
                playsinline
                light={"https://static-cdn.jtvnw.net/previews-ttv/live_user_" + twitch + "-640x360.jpg"}
            /> 

            <img alt='' src={frame} className='livestream__frame'/>
          </div>
     
          {
            viewerCount === undefined ? 
              <div className='livestream__viewerCount'>Offline</div> 
              : 
              <div className='livestream__viewerCount'>
                <div className='livestream__viewerCount--icon'><FontAwesomeIcon icon={faUser}/></div>
                <div className='livestream__viewerCount--number'>{viewerCount}</div>
              </div>
          }
                        
          <div className="livestream__navigation">
              <input type="checkbox" className="livestream__navigation--checkbox" id={"navi-toggle-" + id}></input>
              <label htmlFor={"navi-toggle-" + id} className="livestream__navigation--button">
                  <span className="livestream__navigation--icon">&nbsp;</span>
                  <img alt='' src={banner_circle} className='livestream__navigation--bg'/>
              </label>

              <div className="livestream__navigation--background">
                  <a className="livestream__navigation--item--1" href={'https://www.liquipedia.com/' + twitch} target="_blank" > <img alt="liquipedia" src={liquipediaIcon} /></a>
                  <a className="livestream__navigation--item--2" href={'https://www.twitch.tv/' + twitch} target="_blank" > <img alt="twitch" src={twitchIcon} /></a>
                  <a className="livestream__navigation--item--3" href={'https://www.youtube.com/' + twitch} target="_blank" > <img alt="youtube" src={youtubeIcon} /></a>
                  <a className="livestream__navigation--item--4" href={'https://www.twitter.com/' + twitter} target="_blank" > <img alt="twitter" src={twitterIcon} /></a>
              </div>
          </div>

          <div className="channel">
              {
                (title === '') ?
      
                    <div className='channel__banner'>                                                 
                      <div className='channel__banner--circle'>
                        <img alt='' src={banner_circle} className='channel__banner--circle--bg'/>
                        <a className="channel__banner--img-link" href={'https://www.twitch.tv/' + twitch} target="_blank">
                          <img alt="avatar" src={avatar} height="250" width="250" className="channel__banner--avatar"/>
                        </a> 
                      </div>
                      <div className='channel__banner--rectangle'>
                        <img alt='' src={banner_semi_rectangle} className='channel__banner--rectangle--bg'/>
                        <span className='channel__banner--name'>{ign}</span>
                      </div>                                                                      
                    </div>
                  
                  :

                  <div className='channel__banner__live'>                                                 
                    <div className='channel__banner__live--circle'>
                      <img alt='' src={banner_circle} className='channel__banner__live--circle--bg'/>
                      <a className="channel__banner--img-link" href={'https://www.twitch.tv/' + twitch} target="_blank">
                        <img alt="avatar" src={avatar} height="250" width="250" className="channel__banner__live--avatar"/>
                      </a> 
                    </div>
                    <div className='channel__banner__live--rectangle'>
                      <div className='channel__banner__live--rectangle--inside'>
                        <img alt='' src={banner_rectangle_inside} className='channel__banner__live--rectangle--inside--bg'/>
                        <span className='channel__banner__live--title'>{title}</span>
                        <span className='channel__banner__live--name'>{ign}</span> 
                      </div>
                      <div className='channel__banner__live--rectangle--outside'>
                        <img alt='' src={banner_rectangle_side} className='channel__banner__live--rectangle--outside--bg--1'/>                        
                        <img alt='' src={banner_rectangle_side_21} className='channel__banner__live--rectangle--outside--bg--21'/>
                        <img alt='' src={banner_rectangle_side_22} className='channel__banner__live--rectangle--outside--bg--22'/> 
                      </div>                                                                       
                    </div>                                                                  
                  </div>                  
              }
          </div>
        </div>
      );
  }
}

export default LivestreamCard;

/*
<img alt='Name Banner' src={banner} className='channel__banner--bg'/>

<img alt='' src={banner_rectangle_outside} className='channel__banner__live--rectangle--outside--bg'/>

<img alt='' src={banner_rectangle_side} className='channel__banner__live--rectangle--outside--bg--1'/>
<img alt='' src={banner_rectangle_side_2} className='channel__banner__live--rectangle--outside--bg--2'/>
<img alt='' src={banner_rectangle_side_2} className='channel__banner__live--rectangle--outside--bg--3'/>


<a className="livestream__navigation--item--2" href={'https://www.twitch.tv/' + twitch} target="_blank" ><FontAwesomeIcon icon={faTwitch} /></a>
<a className="livestream__navigation--item--3" href={'https://youtube.com/' + twitter} target="_blank" ><FontAwesomeIcon icon={faYoutube} /></a>
<a className="livestream__navigation--item--4" href={'https://twitter.com/' + twitter} target="_blank" ><FontAwesomeIcon icon={faTwitter} /></a>
*/