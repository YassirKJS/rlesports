import React, {Component} from 'react';
import '../sass/main.scss';
import MyClickable from './MyClickable';
import { updateActiveIndex } from '../actions';
import { connect } from 'react-redux';

// routing
import { Route, Link, BrowserRouter as Router, NavLink  } from 'react-router-dom';

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
            <div>
                <header className="header">
                    <nav className="header__navbar">
                        <NavLink  to="/Cars" className='link'><MyClickable  name="Cars" className='header__item' index={0} isActive={ this.state.activeIndex===0 } onClick={updateActiveIndex} /></NavLink >
                        <NavLink  to="/Players" className='link'><MyClickable  name="Players" className='header__item' index={1} isActive={ this.state.activeIndex===1 } onClick={updateActiveIndex} /></NavLink >
                        <NavLink  to="/Calendar" className='link'><MyClickable  name="Calendar" className='header__item' index={2} isActive={ this.state.activeIndex===2 } onClick={updateActiveIndex} /></NavLink >
                        <NavLink  to="/Reddit" className='link'><MyClickable  name="Reddit" className='header__item' index={3} isActive={ this.state.activeIndex===3 } onClick={updateActiveIndex} /></NavLink >
                        <NavLink  to="/Livestreams" className='link'><MyClickable  name="Livestreams" className='header__item' index={4} isActive={ this.state.activeIndex===4 } onClick={updateActiveIndex} /></NavLink >
                        <NavLink  to="/Livetweets" className='link'><MyClickable  name="Tweets" className='header__item' index={5} isActive={ this.state.activeIndex===5 } onClick={updateActiveIndex} /></NavLink >
                    </nav>
                </header>
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