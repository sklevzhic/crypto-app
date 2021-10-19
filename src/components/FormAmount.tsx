import React from 'react'
import {Button, Col, FormControl, InputGroup, Row, Card} from "react-bootstrap";
import {useInput} from "../hooks/useInput";
import {useActions} from "../hooks/useActions";
import {rounded} from "../utils/rounded";

interface ComponentProps {
    symbol: string,
    name: string
    priceUsd: string
    onHide: () => void
}

export const FormAmount: React.FC<ComponentProps> = ({symbol, name, priceUsd, onHide}) => {
    let {addCoinToPage} = useActions()
    let countCurrency = useInput(0)
    const handleSubmit = () => {
        let obj = {
            amount: countCurrency.value,
            symbol: symbol,
            priceUsd: priceUsd,
            holdings: Number(priceUsd) * countCurrency.value,
            name: name,
        }
        addCoinToPage(obj)
        onHide()
    }
    return <>

        <Card>
            <Card.Body>Price Per Coin: <b>{rounded(priceUsd)} $</b></Card.Body>
        </Card>
        <Row className="align-items-center pt-3">

            <Col xs="auto">
                <b>Quantity</b>
                <InputGroup className="mb-2">
                    <InputGroup.Text>{symbol}</InputGroup.Text>
                    <FormControl {...countCurrency} type="number" step="0.01" min="0"
                                 placeholder="0,00"/>
                </InputGroup>
            </Col>
            <Col>
                <b>Total Spent</b>
                <InputGroup className="mb-2">
                    <p className="form-control"
                       style={{margin: "0", cursor: "default"}}> $ {rounded(Number(priceUsd) * countCurrency.value)}</p>
                </InputGroup>
            </Col>
            <Col xs="auto">
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                >
                    Add to portfolio
                </Button>
            </Col>
        </Row>
    </>;
};