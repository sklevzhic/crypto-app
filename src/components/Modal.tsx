import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import {MyCoinsList} from "./MyCoinsList";
interface ModalCoinsProps {
    show: boolean,
    onHide: () => void
    title: string,
    children: any
}

export const ModalCoins: React.FC<ModalCoinsProps> = ({ show, onHide, title,children}) => {
    return  <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
    </Modal>;
};