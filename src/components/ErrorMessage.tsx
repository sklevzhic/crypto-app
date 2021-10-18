import React, {useState} from 'react'
import {Toast, ToastContainer} from 'react-bootstrap'

interface ErrorMessageProps {
    error: string,
    show: boolean,
    onHide: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({show, onHide, error}) => {
    return <ToastContainer  className="p-3 position-fixed" position={'bottom-start'}>
        <Toast delay={3000} bg={"warning"} onClose={onHide} show={show} autohide>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">api.coincap</strong>
                <small>0 mins ago</small>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
        </Toast>
    </ToastContainer>
};