import React, {Component} from 'react';
import '../sass/main.scss';

class MyClickable extends React.Component {
    handleClick = () => this.props.onClick(this.props.index);

    render() {
        return <div
            className={
                this.props.isActive ? 'header__item--active' : ''
            }
            onClick={ this.handleClick }
        >
            <span>{ this.props.name }</span>
        </div>
    }
}

export default MyClickable;