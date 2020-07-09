import React, { Component  } from 'react';
import { Input } from 'reactstrap';
import CreateConvoBar from '../CreateConvoBar/CreateConvoBar'
import './ChatActionBar.css';

export default class ChatActionBar extends Component{

        constructor() {
            super();
            this.state ={
                CreateBar: false
            }
        }
    
    render(){
        return (
            <div id="chatActionBar">
                <button className='btn'>
                    <i className="fas fa-search"></i>
                </button>
    
                <Input type="text" name="firstName" id="firstName" placeholder="Search for users" />
                {/* {this.state.CreateBar ? <CreateConvoBar/> : null} */}
                {this.state.CreateBar ? null: null}
                <button className='btn' onClick = {() => {
                    this.setState({CreateBar: !this.state.CreateBar})
                }}>
                    <i className="fas fa-comment-alt"></i>
                </button>
            </div>
        )
    }
}
