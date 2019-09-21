import React, { Component } from 'react';

/* styling */
//import '../sass/main.scss';

/* react components */
import Header from "./Header";
import Marquee from "./Marquee";

class Reddit extends Component {
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
                    <span>Reddit here</span>
                    <Marquee />
                </div>
            </div>
        );
    }
}

export default Reddit;
