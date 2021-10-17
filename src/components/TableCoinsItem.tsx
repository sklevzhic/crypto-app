import React from 'react'
import {Image, Col, Row, Button} from "react-bootstrap";
import styles from './TableCoins.module.scss'

interface TableCoinsListProps {
    name: string,
    rank: string,
    symbol: string,
    priceUsd: string,
    changePercent24Hr: string
}

export const TableCoinsItem: React.FC<TableCoinsListProps> = ({name, rank, symbol, priceUsd, changePercent24Hr}) => {

    return <tr>
        <td>{rank}</td>
        <td className={styles.tableItemColumn}>
            <Row style={{alignItems: "center"}}>
                <Col xs={2}>
                    <Image
                        // src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                        src={`https://via.placeholder.com/150`}
                        width={40}
                        height={40}
                    />
                </Col>
                <Col>
                    <div className={styles.tableItem__nameFull}>{name}</div>
                    <div>{symbol}</div>
                </Col>
            </Row>


        </td>
        <td style={{textAlign: "right"}}>$ {parseFloat(priceUsd).toFixed(2)}</td>
        <td>{parseFloat(changePercent24Hr).toFixed(2)} %</td>
        <td><Button>+</Button></td>

    </tr>;
};