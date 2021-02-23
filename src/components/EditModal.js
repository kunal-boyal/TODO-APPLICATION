import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const EditModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title >Edit the todo !</Modal.Title>
            </Modal.Header>
            <Form style={{ margin: 'auto', marginTop: '2rem', marginBottom: '2rem', width: '80%' }}>
                <Form.Group >
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group >
                    <Form.Control type="text" placeholder="Enter Body ..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Edit Todo
                </Button>
            </Form>
        </Modal>
    );
}

export default EditModal