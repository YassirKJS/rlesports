import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MyClickable from "./MyClickable";
import App from "../App";
import Players from "./Players";
import Calendar from "./Calendar";
import Reddit from "./Reddit";
import Livestreams from "./Livestreams";
import Livetweets from "./Livetweets";
import notfound from "./notfound";

//import {Navbar, Nav, NavDropdown} from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import { StickyContainer, Sticky } from 'react-sticky';

// routing
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex : 5, //change (redux) //0
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index });
    }

    render() {
        const header0 =
            <div>
                <header className="header">
                    <nav className="header__navbar">
                        <MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} />
                        <MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} />
                        <MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} />
                        <MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} />
                        <MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} />
                        <MyClickable  name="Livetweets" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={this.handleItemClick} />
                    </nav>
                </header>
            </div>;

        const header =  
                <div className="header">
                    <Navbar className="navbar"> 
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/Cars" className='link'><MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} /></Link>
                                <Link to="/Players" className='link'><MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} /></Link>
                                <Link to="/Calendar" className='link'><MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} /></Link>
                                <Link to="/Reddit" className='link'><MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} /></Link>
                                <Link to="/Livestreams" className='link'><MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} /></Link>
                                <Link to="/Livetweets" className='link'><MyClickable  name="Livetweets" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={this.handleItemClick} /></Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Sign up &nbsp;&nbsp;</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Sign in
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>;

        return (
            <div>
                {header}
                {(this.state.activeIndex===0 || this.state.activeIndex===null)? (
                    <App />
                ) : (
                    (this.state.activeIndex===1)? (
                        <Players />
                    ) : (
                        (this.state.activeIndex===2)? (
                            <Calendar />
                        ) : (
                            (this.state.activeIndex===3)? (
                                <Reddit />
                            ) : (
                                (this.state.activeIndex===4)? (
                                    <Livestreams />
                                ) : (
                                    (this.state.activeIndex===5) ? (
                                        <Livetweets />
                                    ) : (
                                        <notfound />
                                    )
                                )
                            )
                        )
                    )
                )}
            </div>
        );
    }
}

export default Home;




/*
const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveIndex: (index) => dispatch(updateActiveIndex(index)),
    }
};

const mapStateToProps = state => ({
    activeIndex:state.activeIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

 */

//Q: how to keep state after refresh?




/*

        const header =
            <div>
                <header className="header">
                    <nav className="header__navbar">
                        <MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} />
                        <MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} />
                        <MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} />
                        <MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} />
                        <MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} />
                        <MyClickable  name="Livetweets" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={this.handleItemClick} />
                    </nav>
                </header>
            </div>;

*/