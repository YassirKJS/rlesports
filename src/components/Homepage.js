import React, { Component } from 'react';
import Layout from './Layout/Layout';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
    }
  }

  render() {
    return (
      <Layout>
        <h1>This is the Homepage</h1>
      </Layout>
    )
  }
}
