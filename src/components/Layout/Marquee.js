import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
  }

  componentDidMount() {
    let uri = 'https://www.reddit.com/r/RocketLeagueEsports.json?limit=50';
    fetch(uri)
        .then(response => response.json())
        .then(data => {this.setState({ data: data.data.children })});
}

  formatTitle(text) {
    const res = text.replace('&amp;', 'and');
    if (res.endsWith('.') || res.endsWith('!')) {
      return res;
    }
    else return res + '.';
  } 

  testWriteJsonFile() {
    const writeJsonFile = require('write-json-file');
    (async () => {
      await writeJsonFile('foo.json', {foo: true});
    })();
  }

  render() {
    return (
      <p className="marquee">
        <span>
          {            
            this.state.data.map((object, index) => {
              if(object.data.link_flair_text === null) return <div>No News currently available</div>;
              else if(object.data.link_flair_text.toLowerCase().includes('news') || object.data.link_flair_text.toLowerCase().includes('psyonix')) {
                if (index === 0) {
                  return (
                    <div>
                      {this.formatTitle(object.data.title)}
                    </div>
                  );
                }
                else {
                  return (
                    <div>
                      <FontAwesomeIcon icon={faNewspaper} className='marquee-icon'/>
                        {this.formatTitle(object.data.title)}
                    </div>
                  );
                }
              }
              else return;
            })
          }
          <div className='info'>
            For discussions visit reddit.com/r/RocketLeagueEsports.
          </div>
        </span>
      </p>
    )    
  }
}

export default Marquee;

/*************************REDDIT API***********************************

https://www.reddit.com/r/RocketLeagueEsports.json'  --> data

object.object.array[i].object.attribute
data.data.chidren[i].data.attribute

********attributes********

id: "d6xtz4"
name: "t3_d6xtz4"
title: "RLCS LAN going to Madrid!"
author: "simdav"
score: 613
ups: 613
num_comments: 154

link_flair_css_class: "psyonix"
link_flair_text: ":Verified: Psyonix Official"

saved: false
stickied: true
pinned: false
permalink: "/r/RocketLeagueEsports/comments/d6xtz4/rlcs_lan_going_to_madrid/"
url: "https://twitter.com/RLEsports/status/1175092281319182336?s=09"

subreddit: "RocketLeagueEsports"
subreddit_id: "t5_39cf6"
subreddit_name_prefixed: "r/RocketLeagueEsports"
subreddit_subscribers: 27695
subreddit_type: "public"


thumbnail: "https://b.thumbs.redditmedia.com/JFN0jUdozkmubupeNBIH3rqjtN1Wd8SCaV4Su8q-BdI.jpg"
thumbnail_height: 78
thumbnail_width: 140

test2
*/