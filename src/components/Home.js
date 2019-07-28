import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MyClickable from "./MyClickable";
import App from "../App";
import Players from "./Players";
import Calendar from "./Calendar";
import Reddit from "./Reddit";
import Livestreams from "./Livestreams";

import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex : 0, //change (redux)
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index });
    }

    render() {
        const header =
            <div>
                <header className="header">
                    <nav className="header__navbar">
                        <MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={this.handleItemClick} />
                        <MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={this.handleItemClick} />
                        <MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={this.handleItemClick} />
                        <MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={this.handleItemClick} />
                        <MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={this.handleItemClick} />
                    </nav>
                </header>
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
                                <Livestreams />
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