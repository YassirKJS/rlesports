import React, {Component} from 'react';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Sorter extends Component {
    constructor(props) {
        super(props);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(e) {
        this.props.onSelectedSortChange(e.target.value);
    }

    render() {
        return (
            <div>
                <FormControl>
                    <Select
                        value={this.props.selectedSort}
                        onChange={this.handleSortChange}
                        name="sortSelector"
                        displayEmpty
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="hitbox">Hitbox</MenuItem>
                        <MenuItem value="attribute">Attribute</MenuItem>
                        <MenuItem value="release">Release Date</MenuItem>
                    </Select>
                    <FormHelperText>Sort By</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default Sorter;