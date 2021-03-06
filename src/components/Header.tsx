import React from 'react'
import {Button, Col, Container, Row, Badge} from "react-bootstrap";
import {PopularCoins} from "./PopularCoins";
import {ModalCoins} from "./Modal";
import {MyCoinsList} from "./MyCoinsList";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useHistory} from 'react-router-dom';
import { rounded } from '../utils/rounded';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
    let router = useHistory();
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    let {portfolio} = useTypesSelector(state => state.coins)

    return <Container>
        <Row style={{
            margin: "5px 0 20px",
            alignItems: "center"
        }}>
            <Col>
                <h5 onClick={() => router.push("/")} style={{cursor: "pointer"}}>Coins-app</h5>
            </Col>
            <Col xs={6}>
                <PopularCoins/>
            </Col>
            <Col>
                <Button onClick={() => setModalShow(true)}>Portfolio <Badge
                    bg="secondary">{portfolio.length}</Badge></Button>
                <Button onClick={() => setModalShow(true)}>{"12"} USD +2,38 (1,80 %)</Button>
            </Col>

            <ModalCoins
                show={modalShow}
                title={"Portfolio"}
                onHide={() => setModalShow(false)}
            >
                <MyCoinsList/>
            </ModalCoins>
        </Row>
    </Container>;
};