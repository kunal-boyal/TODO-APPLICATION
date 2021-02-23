import React from 'react';
import {Form, FormControl, InputGroup, Button } from 'react-bootstrap'

const form = (props) => {
    return (
        <Form onSubmit={props.onAddTodo}>
            <InputGroup style={{ marginTop: '2rem' }}>
                <FormControl
                    onChange={props.inputHandler}
                    placeholder="What needs to be done ?"
                />
                <InputGroup.Append>
                    <Button type="submit" variant="outline-secondary">Add Todo</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}

export default form;
