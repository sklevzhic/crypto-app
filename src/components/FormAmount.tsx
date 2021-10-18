import React from 'react'
import {Button, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {useInput} from "../hooks/useInput";
import {useActions} from "../hooks/useActions";

interface ComponentProps {
    symbol: string,
    name: string

}

export const FormAmount: React.FC<ComponentProps> = ({symbol, name}) => {
    let {addCoinToPage} = useActions()
    let countCurrency = useInput(0)
    const handleSubmit = () => {
        let obj = {
            amount: countCurrency.value,
            symbol: symbol,
            name: name,
        }
        addCoinToPage(obj)
    }
    return  <>
        <p>Описание кратеое покупаемой </p>
        <Row className="align-items-center">
            <Col xs="auto">
                <InputGroup className="mb-2">
                    <InputGroup.Text>{symbol}</InputGroup.Text>
                    <FormControl {...countCurrency} type="number" step="0.01" min="0"
                                 placeholder="0,00"/>
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