import React from 'react'
import {Button, Col, Image, ListGroup} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {rounded} from "../utils/rounded";
import { Change } from './Change'


interface MyCoinItemProps {
    name: string,
    amount: string,
    symbol: string,
    holdings: number,
    priceUsd: string

}

export const MyCoinItem: React.FC<MyCoinItemProps> = ({name, symbol, amount, holdings, priceUsd}) => {
    let { deleteCoinFromPortfolio } = useActions()
    return <tr>
        <td>
            <Image width={50} height={50} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} fluid/>
        </td>
        <td>
             $ {rounded(priceUsd)}
        </td>
        <td>
             $ {rounded(holdings)}
        </td>
        <td>
             <Change value={"-2"}/>
        </td>


        <td>
            <Button color={"primary"} onClick={() => deleteCoinFromPortfolio(name) }>X</Button>
        </td>
    </tr>

};