import React from 'react'
import {ListGroup} from "react-bootstrap";
import {MyCoinItem} from "./MyCoinItem";

interface MyCoinsListProps {

}

export const MyCoinsList: React.FC<MyCoinsListProps> = () => {
    return             <ListGroup>
        {
            [1,2,3].map(el => {
                return <MyCoinItem />
            })
        }
    </ListGroup>;
};