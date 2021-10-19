import React, {useEffect, useState} from 'react'
import {Table, Button, Spinner} from "react-bootstrap";
import {TableCoinsItem} from "./TableCoinsItem";
import {useTypesSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";
import {ErrorMessage} from "./ErrorMessage";
import {Preloader} from "./Preloader";

interface TableCoinsListProps {

}

export const TableCoinsList: React.FC<TableCoinsListProps> = () => {
    let { rowsPerPage, offset, coins, loading, error} = useTypesSelector(state => state.coins)

    const [show, setShow] = useState(false);
    let { fetchCoins } = useActions()


    useEffect(() => {
        setShow(true)
    }, [error])


    return <>
        {
            error && <ErrorMessage show={show} onHide={() => setShow(false)} error={error}/>
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
        <Button onClick={() => fetchCoins(rowsPerPage, offset)}>
            {
                loading &&     <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />

            }
            Показать еще</Button>
    </>;
};