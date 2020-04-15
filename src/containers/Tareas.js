import React, { useState } from "react";
import { Link } from "react-router-dom";

import Tarea from "../components/Tarea";
import FormTarea from "../components/FormTarea";
//import Select from './Select';
import Button from '@material-ui/core/Button';


export default (props) => {

    const [userValue, setUserValue] = useState("");
    const [state, setState] = React.useState({
        name: '',
    });


    const handleChangeName = e => {
        const newUserValue = e.target.value;

        props.setUserValue(newUserValue)
        console.log(newUserValue);
        const name = e.target.name;
        setState({
          ...state,
          [name]: e.target.value,
        });
    }

    return (
        <div className="app">
            <div className="add-user">
                <Link to="/Usuarios" className = "link-button">
                    <Button variant="contained" color="primary" >
                        Usuarios
                    </Button>
                </Link>
            </div>

            <div className="todo-list">
                <div className="container-app">

                    <div className="container-taskss">
                        {props.tasksdb.map((task, index)=>(
                            <div  >
                                <Tarea
                                    key = {task.id}
                                    index = {task.id}
                                    task = {task}
                                    completeTask = {props.completeTaskdb}
                                    removeTask = {props.removeTaskdb}
                                    updateTask = {props.updateTaskdb}

                                />
                                {   task.isEdit === true &&
                                    <div className = "container-edit-update">
                                        <input
                                            type = "text"
                                            value = {props.textContainerTask}
                                            onChange = { e => props.handleUpdateTaskdb(e, task)}
                                            className = "input-edit-update"
                                        />

                                        <Button variant="outlined" color="secondary" className="button-finish" onClick = { () => props.handleFinishUpdateTaskdb(task) }>Terminar</Button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    
                    <FormTarea addTask = {props.addTaskdb} userValue={userValue} handleChangeName={handleChangeName} users = {props.usersdb} state= {state}/>

                </div>
            </div>
        </div>
    );

};