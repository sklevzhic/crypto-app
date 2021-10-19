import React from 'react'
import {Button, Col, Image, ListGroup, Row} from "react-bootstrap";
import {useActions} from "../hooks/useActions";


interface MyCoinItemProps {
    name: string,
    amount: string,
    symbol: string
}

export const MyCoinItem: React.FC<MyCoinItemProps> = ({name, symbol, amount}) => {
    let { deleteCoinFromPortfolio } = useActions()
    return <tr>
        <td>
            <Image width={50} height={50} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} fluid/>
        </td>
        <td>
             $62,222.97
        </td>
        <td>
             $24,890.25
        </td>
        <td>
             0.04%
        </td>


        <td>
            <Button color={"primary"} onClick={() => deleteCoinFromPortfolio(name) }>X</Button>
        </td>
    </tr>

};