import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MyClickable from "./MyClickable";
import App from "../App";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex : null,
            content: null
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index });

        let content = null;
        switch(index) {
            case 0:
                content = <App />;
                this.setState({content: content});
            default:
                this.setState({content: null});
        }
        console.log(index);
        console.log(content);
    }

    render() {
        let content = this.state.content;

        return (
            <div>
                <div>
                    <header className="header">
                        <nav className="header__navbar">
                            <NavLink  to="/" className='link'><MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} /></NavLink >
                            <NavLink  to="/Players" className='link'><MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} /></NavLink >
                            <NavLink  to="/Calendar" className='link'><MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} /></NavLink >
                            <NavLink  to="/Reddit" className='link'><MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} /></NavLink >
                            <NavLink  to="/Livestreams" className='link'><MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} /></NavLink >
                        </nav>
                    </header>
                </div>

                {content}
            </div>
        );
    }
}

export default Home;