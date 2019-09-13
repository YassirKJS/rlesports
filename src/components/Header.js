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
            <div className="header">
                <Navbar className="navbar"> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className='link'><MyClickable name="Firstpage" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Cars" className='link'><MyClickable name="Cars" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Players" className='link'><MyClickable name="Players" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Calendar" className='link'><MyClickable name="Calendar" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Reddit" className='link'><MyClickable name="Reddit" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Livestreams" className='link'><MyClickable name="Livestreams" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={this.handleItemClick} /></Link>
                            <Link to="/Livetweets" className='link'><MyClickable name="Livetweets" className='header__item' index={6} isActive={ this.state.activeIndex===6 } onClick={this.handleItemClick} /></Link>
                        </Nav>
                        <Nav className="navbar-signup">
                            <Nav.Link href="#deets">Sign up</Nav.Link>
                            <Nav.Link href="#memes">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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