import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(e) {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        return (
            <form>
                <input type='text' placeholder='Search Car...' className="pa3 ba b--washed-yellow bg-lightest-blue"
                       value={this.props.searchText}
                       onChange={this.handleSearchTextChange} />
            </form>
        );
    }
}

export default SearchBox;