import React from "react";

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import iconTrash from '../icons/trash.svg';


const User = props => {
    return(
        <div className="container-task">
            <div className="container-text">
                {props.user.name}
            </div>
            <div className="container-buttons">
                <IconButton color="primary" className="icon-button" onClick={()=>props.updateUser(props.user)}>
                    <EditIcon/>
                </IconButton>
                <IconButton color="secondary" className="icon-button" onClick={ () => props.removeUser(props.index)}>
                    <img className="img-trash" src={iconTrash} alt="iconTrash"/>
                </IconButton>
            </div>
        </div>
    );

};

export default User;