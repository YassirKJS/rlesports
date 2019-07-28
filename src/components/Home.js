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
            activeIndex : this.props.activeIndex, //change (redux)
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(index) {
        this.setState({ activeIndex: index });
    }

    render() {
        const {updateActiveIndex} = this.props;
        console.log('rendering..activeIndex:');
        console.log(this.props.activeIndex);

        const header =
            <div>
                <header className="header">
                    <nav className="header__navbar">
                        <MyClickable  name="Cars" className='header__item' index={0} isActive={ this.props.activeIndex===0 } onClick={updateActiveIndex} />
                        <MyClickable  name="Players" className='header__item' index={1} isActive={ this.props.activeIndex===1 } onClick={updateActiveIndex} />
                        <MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.props.activeIndex===2 } onClick={updateActiveIndex} />
                        <MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.props.activeIndex===3 } onClick={updateActiveIndex} />
                        <MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.props.activeIndex===4 } onClick={updateActiveIndex} />
                    </nav>
                </header>
            </div>;

        return (
            <div>
                {header}
                {(this.props.activeIndex===0 || this.props.activeIndex===null)? (
                    <App />
                ) : (
                    (this.props.activeIndex===1)? (
                        <Players />
                    ) : (
                        (this.props.activeIndex===2)? (
                            <Calendar />
                        ) : (
                            (this.props.activeIndex===3)? (
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

//export default Home;




const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveIndex: (index) => dispatch(updateActiveIndex(index)),
    }
};

const mapStateToProps = state => ({
    activeIndex:state.activeIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

