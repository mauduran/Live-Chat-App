import React from 'react';
import './BackButton.css'
import { useHistory } from "react-router-dom";


export default function BackButton() {
    let history = useHistory();

    return(
        <button id = "BackButton" onClick={() => history.goBack()}><i className="fa fa-arrow-left" aria-hidden="true" ></i></button>
    )
} 

