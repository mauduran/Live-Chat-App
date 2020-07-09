import React, { Component } from 'react';
import './CreateConvoBar.css';
import { Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import CreateConversation from '../CreateConversation/CreateConversation'

class CreateConvoBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            inputText: ''
        }

        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    

    handleOnKeyPress() { 
        console.log('pressed')
    }

    handleOnChange(event){
        console.log(this.state.inputText);
        this.setState({
            inputText: event.target.value
        })
    }


    render(){
        return (
            <div>
                <div id="CreateConvoBar">
                <p id='Tag'>
                    To:
                </p>
                <Input type="text" name="CreateConvo" id="CreateConvo" placeholder="Search for users" onChange={this.handleOnChange} />
            </div>
            <div>
            <ul id="myUL">
                <li><CreateConversation/></li>
            </ul>
            </div>
            </div>
        )
    }
}
export default CreateConvoBar;