import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './EditableInfo.css';

const EditableInfo = () => {
    return(
        <Form id = "formEditable">
            <FormGroup>
                <Label for="locationProfile">Location</Label>
                <Input type="text" name="locationProfile" id="locationProfile" placeholder="Enter your location" />
            </FormGroup>
            <FormGroup>
                <Label for="quoteProfile">Quote</Label>
                <Input type="text" name="quoteProfile" id="quoteProfile" placeholder="Enter your quote" />
            </FormGroup>      
        </Form>
    )
}

export default EditableInfo;