import React, {Component} from 'react';
import '../sass/main.scss';
import MyClickable from './MyClickable';

// routing
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <header className="header">
                    {/*<img alt="logo" src={logo} className="header__logo"
                         onMouseEnter={Header.handleMouseHover} onMouseLeave={Header.handleMouseUnhover} />*/}
                    <nav className="header__navbar">
                        <Link to="/" className='link'>Cars</Link>
                        <Link to="/Players" className='link'>Players</Link>
                        <Link to="/Calendar" className='link'>Calendar</Link>
                        <Link to="/Reddit" className='link'>Reddit</Link>
                        <Link to="/Livestreams" className='link'>Livestreams</Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;