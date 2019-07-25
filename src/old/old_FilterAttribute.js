import React, {Component} from 'react';
import '../sass/main.scss';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


class Old_FilterAttribute extends Component {
    constructor(props) {
        super(props);
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
    }

    handleAttributeChange(e) {
        this.props.onSelectedAttributeChange(e.target.value);
    }

    render() {
        const style = {
            width: '10rem',
            color: 'white',
            textAlign: 'start',
            fontSize: 60,
        };

        const suggestions = [
            { label: 'Common' },
            { label: 'Crate Import' },
            { label: 'Premium DLC' },
            { label: 'Rocket Pass' },
            { label: 'PS4 exclusive' },
            { label: 'Xbox exclusive' },
            { label: 'Nintendo exclusive' },
        ].map(suggestion => ({
            value: suggestion.label,
            label: suggestion.label,
        }));

        return (
            <FormControl autoWidth style={{ width: '15rem' }}>
                <Select
                    value={this.props.selectedAttribute}
                    onChange={this.handleAttributeChange}
                    name="attributeSelector"
                    displayEmpty
                    variant="outlined"
                    bgcolor="text.secondary"
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
        );
    }
}

export default Old_FilterAttribute;


