import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Search Car...' className="pa3 ba b--washed-yellow bg-lightest-blue" />
            </form>
        );
    }
}

export default SearchBox;