import React, {Component} from 'react';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class FilterHitbox extends Component {
    constructor(props) {
        super(props);
        this.handleHitboxChange = this.handleHitboxChange.bind(this);
    }

    handleHitboxChange(e) {
        this.props.onSelectedHitboxChange(e.target.value);
    }

    render() {
        return (
            <div>
                <FormControl>
                    <Select
                        value={this.props.selectedHitbox}
                        onChange={this.handleHitboxChange}
                        name="hitboxSelector"
                        displayEmpty

                    >
                        <MenuItem value="All" >All</MenuItem>
                        <MenuItem value="Octane">Octane</MenuItem>
                        <MenuItem value="Dominus">Dominus</MenuItem>
                        <MenuItem value="Plank">Plank</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                        <MenuItem value="Breakout">Breakout</MenuItem>
                    </Select>
                    <FormHelperText>Filter By Hitbox</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default FilterHitbox;


