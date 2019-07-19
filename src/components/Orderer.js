import React, {Component} from 'react';

/* material ui */
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Orderer extends Component {
    constructor(props) {
        super(props);
        this.handleOrderChange = this.handleOrderChange.bind(this);
    }

    handleOrderChange(e) {
        this.props.onSelectedOrderChange(e.target.value);
    }

    render() {
        return (
            <div>
                <FormControl>
                    <Select
                        value={this.props.selectedOrder}
                        onChange={this.handleOrderChange}
                        name="orderSelector"
                        displayEmpty
                    >
                        <MenuItem value="Ascending">Ascending Order</MenuItem>
                        <MenuItem value="Descending">Descending Order</MenuItem>
                    </Select>
                    <FormHelperText>Order By</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default Orderer;