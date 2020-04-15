import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectInput = props => {

    const [state, setState] = React.useState({
        name: '',
      });


    return (
        <React.Fragment>
            <FormControl variant="outlined" className = "form-user" >
                <InputLabel htmlFor="outlined-age-native-simple" className="input-label">Usuario</InputLabel>
                <Select
                    native
                    value={props.state.name}
                    onChange={props.handleChangeName}
                    label="User"
                    inputProps={{
                        name: 'name',
                        id: 'outlined-age-native-simple',
                    }}
                    className="input-label"
                >
                    <option aria-label="None" value="" disabled />
                    {props.users.map((userUnit) => (
                        <option key={userUnit.name} value={userUnit.name}>
                            {userUnit.name}
                         </option>
                     ))}
                </Select>
            </FormControl>
        </React.Fragment>
    );

};

export default SelectInput;