import React from 'react'
import {ListGroup, Table} from "react-bootstrap";
import {MyCoinItem} from "./MyCoinItem";
import {useTypesSelector} from "../hooks/useTypesSelector";

interface MyCoinsListProps {

}

export const MyCoinsList: React.FC<MyCoinsListProps> = () => {
    let {portfolio} = useTypesSelector(state => state.coins)
    return <ListGroup>

        {
            portfolio.length !== 0 && <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Icon</th>
                    <th>Price</th>
                    <th>Holdings</th>
                    <th>Profit/Loss</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {
                    portfolio.map(el => {
                        return <MyCoinItem key={el.name} amount={el.amount} symbol={el.symbol} name={el.name}
                                           priceUsd={el.priceUsd} holdings={el.holdings}/>
                    })
                }
            </Table>
        }


        {
            portfolio.length === 0 && <>Ничего нет</>
        }
    </ListGroup>;
};