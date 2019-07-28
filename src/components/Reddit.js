import React, { Component } from 'react';

/* styling */
import '../sass/main.scss';

/* react components */
import Header from "./Header";

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
                    <span>Reddit here</span>
                </div>
            </div>
        );
    }
}

export default Reddit;
