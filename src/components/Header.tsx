import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {PopularCoins} from "./PopularCoins";
import {ModalCoins} from "./Modal";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    return         <Row>
        <Col>
            <p>Coins-app</p>
        </Col>
        <Col xs={6}>
            <PopularCoins/>
        </Col>
        <Col><Button  onClick={() => setModalShow(true)}>My</Button></Col>
        <ModalCoins
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </Row>;
};