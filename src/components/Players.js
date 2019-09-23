import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Layout from './Layout/Layout';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Layout>
        <h1>Players here</h1>
      </Layout>
    );
  }
}

export default Players;
