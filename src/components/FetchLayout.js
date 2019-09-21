import React, { Component } from 'react'

export default class FetchLayout extends Component {
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
            fetch('https://api.twitch.tv/helix/streams?user_login=blabla')
                .then(response => response.json())
                .then(data => {resolve(data.data) ; /*console.log(data.data)*/});
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
              <h1>header here</h1>
              <h2>Loading...</h2>;
            </div>
        );
    }

    this.state.data.forEach(function(object) {
        //console.log(object.user_name);
        return (
          <div>{object.user_name}</div>
        )
    });

    console.log('This happens 8th - after I get data.');

    return (
        <div>
          whatever loaded
        </div>
    );
  }
}
