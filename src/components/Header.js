import React, {Component} from 'react';
import MyClickable from './MyClickable';
import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';
import '../sass/layout/_header.scss';

//import {Navbar, Nav, NavDropdown} from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { StickyContainer, Sticky } from 'react-sticky';

// routing
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

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
        const {updateActiveIndex} = this.props;

        return (
            <div className="header__navbar">
                <div className='header__navbar--links'>
                    <Link to="/" className='link'><MyClickable name="FIRSTPAGE" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Cars" className='link'><MyClickable name="CARS" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Players" className='link'><MyClickable name="PLAYERS" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Calendar" className='link'><MyClickable name="CALENDAR" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Reddit" className='link'><MyClickable name="REDDIT" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Livestreams" className='link'><MyClickable name="LIVESTREAMS" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Livetweets" className='link'><MyClickable name="LIVETWEETS" className='header__item' index={6} isActive={ this.state.activeIndex===6 } onClick={this.handleItemClick} /></Link>  
                </div>
                
                <div className='header__navbar--signup'>
                    <Link to="/Signup" className='link'><MyClickable name="SIGN UP" className='header__item' index={7} isActive={ this.state.activeIndex===7 } onClick={this.handleItemClick} /></Link>
                    <Link to="/Signin" className='link'><MyClickable name="SIGN IN" className='header__item' index={8} isActive={ this.state.activeIndex===8 } onClick={this.handleItemClick} /></Link>    
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