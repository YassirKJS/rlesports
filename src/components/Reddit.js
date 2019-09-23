import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Layout from './Layout/Layout';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Layout>
        <h1>Reddit here</h1>
      </Layout>
    )    
  }
}

export default Reddit;




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


*/