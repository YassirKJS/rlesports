import React, {Component} from 'react';
import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';
import '../sass/layout/_header.scss';

//import {Navbar, Nav, NavDropdown} from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { StickyContainer, Sticky } from 'react-sticky';

// routing: see https://reacttraining.com/react-router/web/api/BrowserRouter
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleSidebar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  
    closeSidebar() {
        if (this.state.collapsed !== true) {
          this.toggleSidebar();
        }
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
      this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.closeSidebar();
      }
    }

    render() {
        return (
            <div className='navbar'>
                <div className="header__navbar">
                    <div className='header__navbar--links'>
                        <NavLink exact to="/" className='link home' activeClassName="selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)",                            
                            }}
                        >
                            HOME
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
                            <FontAwesomeIcon icon={faBars} className='icon-bars' onClick={this.toggleSidebar}/>  
                        </div>
                    </div>                
                </div>

                <div ref={this.setWrapperRef} className= {this.state.collapsed? 'side__navbar collapsed' : 'side__navbar toggled'}>
                    <div className='side__navbar--links'>
                        <div className=''>
                          <FontAwesomeIcon icon={faTimes} className='icon-collapse' onClick={this.closeSidebar}/>  
                        </div>
                        <NavLink exact to="/" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)",                            
                            }}
                        >
                            HOME
                        </NavLink>
                        <NavLink to="/Cars" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            CARS
                        </NavLink>
                        <NavLink to="/Players" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            PLAYERS
                        </NavLink>
                        <NavLink to="/Calendar" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            CALENDAR
                        </NavLink> 
                        <NavLink to="/Reddit" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            REDDIT
                        </NavLink> 
                        <NavLink to="/Livestreams" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            LIVESTREAMS
                        </NavLink> 
                        <NavLink to="/Livetweets" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            LIVETWEETS
                        </NavLink> 
                    </div>
                    
                    <div className='side__navbar--signup'>
                        <NavLink to="/Signup" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            SIGN UP
                        </NavLink> 
                        <NavLink to="/Signin" className='side--link' activeClassName="side--link--selected"
                            activeStyle={{
                                color: "var(--color-brown-dark)"
                            }}
                        >
                            SIGN IN
                        </NavLink> 
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