import React from 'react'
import {Col, Row} from "react-bootstrap";
import {TableCoinsList} from "../components/TableCoinsList";
import {PaginationC} from "../components/Pagination";
import {Task} from "../components/Task";

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = () => {


    return <>

        <Row>
            <Col>
                <TableCoinsList/>
                <PaginationC/>
                <Task/>
            </Col>

        </Row>
        </>;
};