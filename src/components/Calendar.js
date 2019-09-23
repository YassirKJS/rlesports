import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Layout from './Layout/Layout';

class Calendar extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
      return (
          <Layout>
            <h1>Calendar here</h1>
          </Layout>
      );
    }
}

export default Calendar;
