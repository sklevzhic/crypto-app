import React, {useEffect, useState} from 'react'
import {Button, Pagination} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";

interface PaginationProps {

}

export const PaginationC: React.FC<PaginationProps> = () => {
    let { fetchCoins } = useActions()

    let active = 1;
    let items = [];
    for (let number = 1; number <= 150; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return <>


    </>;
};