import React from 'react'
import {Col, Row} from "react-bootstrap";
import {TableCoinsList} from "../components/TableCoinsList";
import {Task} from "../components/Task";

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {


    return <>

        <Row>
            <Col>
                <TableCoinsList/>
                <Task/>
            </Col>

        </Row>
        </>;
};