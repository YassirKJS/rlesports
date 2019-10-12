/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSignedIn: false,
        };
    }

    componentDidMount() {
      fetch('http://localhost:3010')
        .then(response => response.json())
        .then(console.log)
    }

    render() {
      console.log(location.pathname);
      return (
        <Layout isSignedIn={this.state.isSignedIn}>
          <h1>This is the App Homepage</h1>
        </Layout>
      );
    }
}

export default App;

