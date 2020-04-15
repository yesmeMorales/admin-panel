import React from "react";

import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import iconTrash from '../icons/trash.svg';
import EditIcon from '@material-ui/icons/Edit';


export default (props) => {
    let cadena = props.task.user;
    let letra = cadena.charAt(0);
    return(
            <div className={`${props.task.isEdit === false ? "container-task" : "container-edit-task"}`} style={{textDecoration: props.task.isCompleted ? "line-through" : "" }}>
                <div className = "letter-user">
                    {letra}
                </div>
                <div className="container-text">
                    {props.task.text}
                </div>
                <div className="container-buttons">
                    <IconButton color="primary" className="icon-button" onClick={()=>props.completeTask(props.task)}>
                        <DoneIcon/>
                    </IconButton>
                    <IconButton color="primary" className="icon-button" onClick={()=>props.updateTask(props.task)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton color="secondary" className="icon-button" onClick={() => props.removeTask(props.index)}>
                        <img className="img-trash" src={iconTrash} alt="iconTrash"/>
                    </IconButton>
                </div>

            </div>
    );

};
