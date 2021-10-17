import React from 'react'
import {ListGroup} from "react-bootstrap";
import {MyCoinItem} from "./MyCoinItem";
import {useTypesSelector} from "../hooks/useTypesSelector";

interface MyCoinsListProps {

}

export const MyCoinsList: React.FC<MyCoinsListProps> = () => {
    let {portfolio} = useTypesSelector(state => state.coins)
    return <ListGroup>
        {
            portfolio && <>
                {
                    portfolio.map(el => {
                        return <MyCoinItem key={el.name} amount={el.amount} symbol={el.symbol} name={el.name}/>
                    })
                }
            </>
        }

        {
            portfolio.length === 0 && <>Ничего нет</>}
    </ListGroup>;
};