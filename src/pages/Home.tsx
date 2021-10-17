import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {PopularCoins} from "../components/PopularCoins";
import {TableCoins} from "../components/TableCoins";
import {PaginationC} from "../components/Pagination";
import {Task} from "../components/Task";

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {
    return <>

        <Row>

        </Row>
        <Row>
            <Col>
                <TableCoins/>
                <PaginationC/>
                <Task/>
            </Col>

        </Row>
        </>;
};