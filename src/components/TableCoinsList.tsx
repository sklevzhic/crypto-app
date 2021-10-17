import React, {useEffect, useState} from 'react'
import {Table} from "react-bootstrap";
import axios, {AxiosResponse} from "axios";
import {ICoins} from "../types";
import {TableCoinsItem} from "./TableCoinsItem";

interface TableCoinsListProps {

}

export const TableCoinsList: React.FC<TableCoinsListProps> = () => {
    // @ts-ignore
    let [coins, setCoins] = useState<ICoins | undefined>()
    useEffect(() => {
        fetchCoins()
    }, [])

    async function fetchCoins() {
        try {
            const response: AxiosResponse<ICoins> = await axios.get('https://api.coincap.io/v2/assets?limit=10')
            setCoins(response.data)
        } catch (e) {
            alert(e)
        }
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
                            coins.data.map(el => {
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