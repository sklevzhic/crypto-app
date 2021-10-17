import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {PopularCoins} from "./PopularCoins";
import {ModalCoins} from "./Modal";
import {MyCoinsList} from "./MyCoinsList";

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    return <Row style={{alignItems: "center", margin: "5px 0 20px"}}>
        <Col>
            <p>Coins-app</p>
        </Col>
        <Col xs={6}>
            <PopularCoins/>
        </Col>
        <Col><Button onClick={() => setModalShow(true)}>Portfolio</Button></Col>
        <ModalCoins
            show={modalShow}
            title={"My coins"}
            onHide={() => setModalShow(false)}
        >
            <MyCoinsList />
        </ModalCoins>
    </Row>;
};