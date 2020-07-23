import React from 'react';
import './BackButton.css'
import { useHistory } from "react-router-dom";


export default function BackButton() {
    const history = useHistory();

    function handleOnClick(){
        history.goBack();
    }

    return(
        <button id = "BackButton" onClick={handleOnClick}><i className="fa fa-arrow-left" aria-hidden="true" ></i></button>
    )
} 

