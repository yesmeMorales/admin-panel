
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Usuario from "../components/Usuario";
import FormUsuario from "../components/FormUsuario";

import Button from '@material-ui/core/Button';

export default (props) => {

    return (
        <div className="app">
            <div className="add-user">
                <Link to="/" className = "link-button">
                    <Button variant="contained" color="primary" >
                        Tareas
                    </Button>
                </Link>
            </div>
            <div className="todo-list">
                <div className="container-app">

                <div className="container-taskss">
                    {props.usersdb.map((user, index)=>(
                        <React.Fragment>
                            <Usuario
                                key = {user.id}
                                index = {user.id}
                                user = {user}
                                removeUser = {props.removeUserdb}
                                updateUser = {props.updateUserdb}
                            />
                            {   user.isEdit === true &&
                                <div className = "container-edit-update">
                                    <input
                                        type = "text"
                                        value = {props.nameContainerUser}
                                        //onChange = { e => setTextComplete(e.target.value) }
                                        onChange = { e => props.handleUpdateUserdb(e, user)}
                                        className = "input-edit-update"
                                    />

                                    <Button variant="outlined" color="secondary" className="button-finish" onClick = { () => props.handleFinishUpdatedb(user) }>
                                        Terminar
                                    </Button>

                                </div>
                            }
                        </React.Fragment>
                    ))}
                </div>
                <FormUsuario addUser = {props.addUserdb}/>
            </div>

            </div>
        </div>
    );
};