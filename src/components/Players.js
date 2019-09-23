import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Header from "./Layout/Header";

class Players extends Component {
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
                    <span>Players here</span>
                </div>
            </div>
        );
    }
}

export default Players;
