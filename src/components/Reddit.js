import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Header from "./Header";

class Reddit extends Component {
  constructor(props) {
    super(props);

    console.log('This happens 1st: Constructor');

    this.state = {
        loading: 'initial',
        data: [],
    };
  }

  loadData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This happens 6th (after 2 seconds): Data loaded');
            //resolve('This is my data.');
            let uri = 'https://www.reddit.com/r/RocketLeagueEsports.json';
            fetch(uri)
                .then(response => response.json())
                .then(data => {resolve(data) ; /*console.log('displaying data:');console.log(data.data.children[0].data.title)*/ });
        }, .500); //.500
    });

    console.log('This happens 4th: Loading data');

    return promise;
  }

  componentDidMount() {
    console.log('This happens 3rd: ComponentDidMount');

    this.setState({ loading: 'true' });
    this.loadData()
        .then((data) => {
            console.log('This happens 7th: ComponentDidMount/this.loadData');
            if (data === undefined || data.length === 0) {
                console.log("data empty");
                this.setState({
                    data: [],
                    loading: 'false'
                });
            }
            else {
                console.log("data not empty");
                this.setState({
                    data: data,
                    loading: 'false'
                });
            }
        });
  }

  render() {
    if (this.state.loading === 'initial') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }

    if (this.state.loading === 'true') {
        console.log('This happens 5th - when waiting for data.');
        return (
            <div>
              <Header />
              <h2>Loading...</h2>;
            </div>
        );
    }

    console.log('This happens 8th - after I get data.');

    return (
      <div>
        <Header />
        {
          this.state.data.data.children.map((object) => {
            return (
              <div>{object.data.title}</div>
            );
          })
        }
      </div>
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