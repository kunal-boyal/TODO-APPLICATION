import React from 'react'
import { Spinner } from 'react-bootstrap';


const TableSpinner = () => {
    return (
        <div style={{ margin: 'auto', marginTop: '100px',textAlign:'center' }}>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}

export default TableSpinner