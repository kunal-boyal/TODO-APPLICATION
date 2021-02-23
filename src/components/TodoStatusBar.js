import React from 'react';
import { Button } from 'react-bootstrap'

const todoStatusBar = (props) => {
    return (
        < div style={{ background: '#F4FCE8', border: '1px solid green', borderRadius: '0.5rem', padding: '0.5rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ margin: 'auto', marginLeft: 0 }}>{props.todosLeft} items left</p>
            <Button variant="outline-success" onClick={props.clicked}>Clear {props.completed} completed item</Button>
        </div>
    )
}

export default todoStatusBar;
