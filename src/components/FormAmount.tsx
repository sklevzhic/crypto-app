import React from 'react'
import {Button, Col, FormControl, InputGroup, Row, Image} from "react-bootstrap";
import {useInput} from "../hooks/useInput";
import {useActions} from "../hooks/useActions";

interface ComponentProps {
    symbol: string,
    name: string
    priceUsd: string
}

export const FormAmount: React.FC<ComponentProps> = ({symbol, name,priceUsd}) => {
    let {addCoinToPage} = useActions()
    let countCurrency = useInput(0)
    const handleSubmit = () => {
        let obj = {
            amount: countCurrency.value,
            symbol: symbol,
            priceUsd: priceUsd,
            name: name,
        }
        addCoinToPage(obj)
    }
    return <>


        <p>Price Per Coin: {priceUsd} $</p>
        <Row className="align-items-center">

            <Col xs="auto">
                <p>Quantity</p>
                <InputGroup className="mb-2">
                    <InputGroup.Text>{symbol}</InputGroup.Text>
                    <FormControl {...countCurrency} type="number" step="0.01" min="0"
                                 placeholder="0,00"/>
                </InputGroup>
            </Col>
            <Col>
                <p>Total Spent</p>
                <InputGroup className="mb-2">
                    <InputGroup.Text>$</InputGroup.Text>
                    <p className="form-control" style={{margin: "0", cursor: "default"}}>{ Number(priceUsd) * countCurrency.value }</p>
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