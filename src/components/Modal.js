import React from 'react'
import { Modal,Button } from 'react-bootstrap'

const VerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>You can not delete the todo before completing it !</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VerticallyCenteredModal
