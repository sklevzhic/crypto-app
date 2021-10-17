import React, {useEffect} from 'react'
import {Table} from "react-bootstrap";
import {TableCoinsItem} from "./TableCoinsItem";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";

interface TableCoinsListProps {

}

export const TableCoinsList: React.FC<TableCoinsListProps> = () => {
    let {coins, loading, error} = useTypesSelector(state => state.coins)
    let { fetchCoins } = useActions()
    useEffect(() => {
        fetchCoins()
    }, [])
    if (loading) {
        return <h2>Загрузка</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return <>
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


    </>;
};