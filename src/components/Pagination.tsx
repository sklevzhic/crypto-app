import React, {useEffect, useState} from 'react'
import {Button, Pagination} from "react-bootstrap";
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";

interface PaginationProps {

}

export const PaginationC: React.FC<PaginationProps> = () => {
    let { fetchCoins } = useActions()
    const [rows, setRows] = useState<number>(10)
    const handleFetchCoins = () => {
        setRows(prev => prev +10)
        fetchCoins(rows)
    }

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
        <Button onClick={handleFetchCoins}>Показать еще</Button>
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item active>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item >{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>

    </>;
};