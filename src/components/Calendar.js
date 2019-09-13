import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Header from "./Header";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        return (
            <div>
                <div className="tc">
                    <Header />
                    <span>Calendar here</span>
                </div>
            </div>
        );
    }
}

export default Calendar;
