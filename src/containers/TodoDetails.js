import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as actions from '../store/actions'

const TodoDetails = (props) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        const todo = props.todos.find(todo => todo._id === props.currentTodoId)
        setTitle(todo.title)
        setBody(todo.body)
    }, [])

    const titleEventHandler = (e) => {
        setTitle(e.target.value)
    }

    const bodyEventHandler = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editTodoHandler({ _id: props.currentTodoId, title, body })
        props.history.replace('/')
    }

    return (
        <React.Fragment>
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }} >Edit your todo and add description to it !</h3>
            <Form style={{ margin: 'auto', marginTop: '2rem', marginBottom: '2rem', width: '80%' }} onSubmit={handleSubmit}>
                <Form.Label>Title</Form.Label>
                <Form.Group >
                    <Form.Control type="text" value={title} onChange={titleEventHandler} />
                </Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Group >
                    <Form.Control type="text" placeholder="Enter Body ..." onChange={bodyEventHandler} value={body} />
                </Form.Group>
                <Button variant="outline-warning" type="submit">
                    Edit Todo
            </Button>
            </Form>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        currentTodoId: state.currentTodoId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoHandler: (data) => dispatch(actions.editTodo(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)