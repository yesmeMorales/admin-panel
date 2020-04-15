import React, { useState } from "react";


const EditarTexto = props => {
    return (
        <form >
            <input
                type="text"
                value = {props.text}
            />
         </form>

    );


};

export default EditarTexto;