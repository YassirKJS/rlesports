import React, {Component} from 'react';
import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';
import '../sass/layout/_header.scss';

//import {Navbar, Nav, NavDropdown} from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { StickyContainer, Sticky } from 'react-sticky';

// routing: see https://reacttraining.com/react-router/web/api/BrowserRouter
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index });
    }

    render() {
        //const {updateActiveIndex} = this.props;

        return (
            <div className="header__navbar">
                <div className='header__navbar--links'>
                    <NavLink exact to="/" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)",                            
                        }}
                    >
                        HOMEPAGE
                    </NavLink>
                    <NavLink to="/Cars" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        CARS
                    </NavLink>
                    <NavLink to="/Players" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        PLAYERS
                    </NavLink>
                    <NavLink to="/Calendar" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        CALENDAR
                    </NavLink> 
                    <NavLink to="/Reddit" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        REDDIT
                    </NavLink> 
                    <NavLink to="/Livestreams" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        LIVESTREAMS
                    </NavLink> 
                    <NavLink to="/Livetweets" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        LIVETWEETS
                    </NavLink> 
                </div>
                
                <div className='header__navbar--signup'>
                    <NavLink to="/Signup" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        SIGN UP
                    </NavLink> 
                    <NavLink to="/Signin" className='link' activeClassName="selected"
                        activeStyle={{
                            color: "var(--color-brown-dark)"
                        }}
                    >
                        SIGN IN
                    </NavLink> 
                    <div className='menu-bars'>
                        <FontAwesomeIcon icon={faBars} className='icon-bars'/>  
                    </div>
                </div>                
            </div>
        );
    }
}

//export default Header;

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveIndex: (index) => dispatch(updateActiveIndex(index)),
    }
};

const mapStateToProps = state => ({
    activeIndex: state.activeIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);