import React, { Component } from 'react';
import Layout from './Layout/Layout';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010')
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <Layout>
        <h1>This is the Homepage</h1>
      </Layout>
    )
  }
}
