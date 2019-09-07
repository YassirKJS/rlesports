import React, { Component } from 'react';

/* styling */
import '../sass/main.scss';


const EMBED_URL = 'https://platform.twitter.com/widgets.js';

class Livetweets extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = EMBED_URL;
        script.async = true;
        document.body.appendChild(script);
    }

    render() {

        return (
            <div>
                <div className="tc">
                    <a class="twitter-timeline" data-width="500" data-height="1920" data-theme="dark" href="https://twitter.com/RlesportsF/lists/rlesports-feed"></a> 
                </div>
            </div>
        );
    }
}

export default Livetweets;
