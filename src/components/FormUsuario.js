import React, { useState } from 'react';


export default (props) => {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.addUser(value);
        setValue("");
    };

    return(
        <React.Fragment>
            <form onSubmit = {handleSubmit} className="container-input">
                <div className = "container-addTask">
                    <input
                        type = "text"
                        className = "input-user"
                        value = {value}
                        onChange = { e => setValue(e.target.value) }
                        placeholder="Agregar Usuario"
                    />
                </div>

            </form>
         </React.Fragment>

    );
};