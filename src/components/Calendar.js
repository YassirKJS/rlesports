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
              <span>Calendar here</span>
            </Layout>
        );
    }
}

export default Calendar;
