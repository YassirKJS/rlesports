import React, {Component} from 'react';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class FilterAttribute extends Component {
    constructor(props) {
        super(props);
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
    }

    handleAttributeChange(e) {
        this.props.onSelectedAttributeChange(e.target.value);
    }

    render() {
        return (
            <div>
                <FormControl>
                    <Select
                        value={this.props.selectedAttribute}
                        onChange={this.handleAttributeChange}
                        name="attributeSelector"
                        displayEmpty
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Common">Common</MenuItem>
                        <MenuItem value="Crate Import">Crate Import</MenuItem>
                        <MenuItem value="Premium DLC">Premium DLC</MenuItem>
                        <MenuItem value="Limited">Rocket Pass</MenuItem>
                        <MenuItem value="Exclusive PS4">PS4 exclusive</MenuItem>
                        <MenuItem value="Exclusive Xbox One">Xbox exclusive</MenuItem>
                        <MenuItem value="Exclusive Nintendo Switch">Nintendo exclusive</MenuItem>
                    </Select>
                    <FormHelperText>Filter By Attribute</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default FilterAttribute;


