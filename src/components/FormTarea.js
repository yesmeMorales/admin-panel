import React, { useState } from 'react';
import Select from './Select';

export default (props) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.addTask(value);
        setValue("");
    };

    return(
        <React.Fragment>
            <form onSubmit = {handleSubmit} className="container-input">
                <div className = "container-addTask">
                    <input
                        type = "text"
                        placeholder="Agregar Tarea"
                        className = "input-task"
                        value = {value}
                        onChange = { e => setValue(e.target.value) }

                    />

                        <Select users={props.users} handleChangeName = {props.handleChangeName} state={props.state}/>
                </div>


            </form>

         </React.Fragment>

    );
};