import React from 'react';
import deleteIcon from '../assets/delete.png'
import { Button } from 'react-bootstrap'

import classes from './Todos.module.css'

const todos = (props) => {
    return (
        <div style={{ marginTop: '1rem', borderBottom: '1px solid' }} >
            <input
                className={classes.TodoInput}
                style={{ width: '25px', height: '25px', marginRight: '1rem' }}
                type="checkbox"
                checked={props.isCompleted}
                onChange={() => props.checkBox(props.id, props.isCompleted)}></input>
            <h2
                className={classes.TodoTitle}
                style={{ display: 'inline-block', margin: 0 }}
                onClick={() => props.clicked(props.id)}>
                {props.title}
            </h2>
            <Button variant="outline-danger" style={{ float: 'right' }} onClick={() => props.delete(props.id, props.isCompleted)}>
                <img src={deleteIcon} alt="Girl in a jacket"></img>
            </Button>
        </div>
    )
}

export default todos;
