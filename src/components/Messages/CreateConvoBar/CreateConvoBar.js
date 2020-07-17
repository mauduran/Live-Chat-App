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

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
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
                <li><CreateConversation inputText = {this.state.inputText}/></li>
            </ul>
            </div>
            </div>
        )
    }
}
export default withRouter(CreateConvoBar);