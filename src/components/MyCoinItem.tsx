import React from 'react'
import {Button, Image, ListGroup} from "react-bootstrap";
import {useActions} from "../hooks/useActions";


interface MyCoinItemProps {
    name: string,
    amount: string,
    symbol: string
}

export const MyCoinItem: React.FC<MyCoinItemProps> = ({name, symbol, amount}) => {
    let { deleteCoinFromPortfolio } = useActions()
    return <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <div>
            <Image width={50} height={50} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} fluid/>
        </div>
        <div className="ms-2 me-auto">
            <div className="fw-bold">{amount}</div>
            {name}
        </div>
        <Button onClick={() => deleteCoinFromPortfolio(name) }>X</Button>
    </ListGroup.Item>;
};