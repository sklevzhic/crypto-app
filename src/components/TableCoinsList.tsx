import React, {useEffect, useState} from 'react'
import {Table, Alert, Button} from "react-bootstrap";
import {TableCoinsItem} from "./TableCoinsItem";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";
import {PaginationC} from "./Pagination";

interface TableCoinsListProps {

}

export const TableCoinsList: React.FC<TableCoinsListProps> = () => {
    let { rowsPerPage, offset, coins, loading, error} = useTypesSelector(state => state.coins)
    let { fetchCoins } = useActions()

    useEffect(() => {
        fetchCoins(rowsPerPage, offset)
    }, [])

    // if (loading) {
    //     return <h2>Загрузка</h2>
    // }

    return <>
        {
            error &&  <Alert style={{position: "fixed", left: 10, bottom: 10}} variant={"danger"}>
                {error}
            </Alert>
        }
        <Table striped bordered responsive hover>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change (24Hr)</th>
            </tr>
            </thead>
            <tbody>
            <>
                {
                    coins && <>
                        {
                            coins.map(el => {
                                return <TableCoinsItem
                                    key={el.symbol}
                                    name={el.name}
                                    changePercent24Hr={el.changePercent24Hr}
                                    priceUsd={el.priceUsd}
                                    rank={el.rank}
                                    symbol={el.symbol}
                                />
                            })
                        }
                    </>
                }
            </>
            </tbody>
        </Table>
        <Button onClick={() => fetchCoins(rowsPerPage, offset)}>Показать еще</Button>
    </>;
};