import React from 'react';
import './CreateConvoBar.css';
import { Input } from 'reactstrap';

export default function CreateConvoBar() {
    return (
        <div id="CreateConvoBar" style={{ width: '100%', height: '50px', backgroundColor: '#f8f8f8', borderBottom: '1px solid #383838' }} >
            To: <Input type="text" name="ConvoBar" id="ConvoBar" placeholder="Search for users" />       
        </div>
    )
}