import React, {Component} from 'react';
import '../sass/main.scss';
import MyClickable from './MyClickable';

// routing
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        };
        Header.handleMouseHover = Header.handleMouseHover.bind(this);
        Header.handleMouseUnhover = Header.handleMouseUnhover.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    static handleMouseHover(e) {
        e.target.src = require('../resources/imgs/logo.png');
    }

    static handleMouseUnhover(e) {
        e.target.src = require('../resources/imgs/logo-white.png');
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index })
    }

    componentWillMount() {
        this.setState({ activeIndex: 0 });
    }

    render() {
        const logo = require('../resources/imgs/logo-white.png');

        return (
            <div>
                <header className="header">
                    {/*<img alt="logo" src={logo} className="header__logo"
                         onMouseEnter={Header.handleMouseHover} onMouseLeave={Header.handleMouseUnhover} />*/}
                    <nav className="header__navbar">
                        <Link to="/" className='link'><MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} /></Link>
                        <Link to="/Players" className='link'><MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} /></Link>
                        <Link to="/Calendar" className='link'><MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} /></Link>
                        <Link to="/Reddit" className='link'><MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} /></Link>
                        <Link to="/Livestreams" className='link'><MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} /></Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;