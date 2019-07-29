/*
import React  from 'react';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Hello extends React.Component {
    componentDidMount() {
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
        });
        document.body.appendChild(script);
    }

    render() {

        return (
            <div>
                Hello {this.props.channel} {this.props.targetID} {this.props.width} {this.props.height}
                <div id={this.props.targetID}></div>
            </div>
        )
    }
}

Hello.defaultProps = {
    targetID: 'twitch-embed',
    width: '840',
    height: '480',
    channel: 'monstercat',
};

ReactDOM.render(
    <Hello />,
    document.getElementById('container')
);


 */