import React from 'react';
import { Input } from 'reactstrap';

import './ChatActionBar.css';

export default function ChatActionBar() {
    return (
        <div id="chatActionBar">
            <button className='btn'>
                <i className="fas fa-search"></i>
            </button>

            <Input type="text" name="firstName" id="firstName" placeholder="Search for users" />

            <button className='btn'>
                <i className="fas fa-comment-alt"></i>
            </button>
        </div>
    )
}
