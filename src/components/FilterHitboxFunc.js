import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Select from 'react-select';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';

import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';

//https://github.com/JedWatson/react-select

const suggestions = [
    { label: 'All' },
    { label: 'Octane' },
    { label: 'Dominus' },
    { label: 'Plank' },
    { label: 'Hybrid' },
    { label: 'Breakout' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));



function FilterHitboxFunc ({ selectedHitbox, onSelectedHitboxChange }) {
    const [selectedOption , setSelectedOption ] = useState(null);

    const handleHitboxChange = selectedOption   => {
        setSelectedOption(selectedOption);
        onSelectedHitboxChange(selectedOption.value);
        console.log(selectedOption.value);
    };

    return (
        <div>
                <Select
                    value={selectedOption }
                    onChange={handleHitboxChange}
                    name="hitboxSelector"
                    options={suggestions}
                />
                <FormHelperText>Filter By Hitbox</FormHelperText>
        </div>
    );

}

export default FilterHitboxFunc;


