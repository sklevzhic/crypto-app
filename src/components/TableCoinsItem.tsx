import React from 'react'
import {Image, Col, Row, Button, FormControl, InputGroup, Form} from "react-bootstrap";
import styles from './TableCoins.module.scss'
import {ModalCoins} from "./Modal";
import {useActions} from "../hooks/useActions";
import {useInput} from "../hooks/useInput";


interface TableCoinsListProps {
    name: string,
    rank: string,
    symbol: string,
    priceUsd: string,
    changePercent24Hr: string
}

export const TableCoinsItem: React.FC<TableCoinsListProps> = ({name, rank, symbol, priceUsd, changePercent24Hr}) => {
    let {addCoinToPage} = useActions()
    let countCurrency = useInput('')

    const [modalShow, setModalShow] = React.useState<boolean>(false);

    const handleSubmit = () => {
        let obj = {
            amount: countCurrency.value,
            symbol: symbol,
            name: name,
        }
        addCoinToPage(obj)
    }
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
        <td style={{textAlign: "right"}}>
            $ {parseFloat(priceUsd).toFixed(2)}
        </td>
        <td>
            {parseFloat(changePercent24Hr).toFixed(2)} %
        </td>
        <td>
            <Button onClick={() => setModalShow(true)}>+</Button>
        </td>

        <ModalCoins
            show={modalShow}
            title={"My coins"}
            onHide={() => setModalShow(false)}
        >
            <p>Описание кратеое покупаемой </p>
            <Row className="align-items-center">
                <Col xs="auto">
                    <InputGroup className="mb-2">
                        <InputGroup.Text>BTC</InputGroup.Text>
                        <FormControl {...countCurrency} type="number" step="0.01" min="0"
                                     placeholder="0,00"/>
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                    >
                        Add to portfolio
                    </Button>
                </Col>
            </Row>
        </ModalCoins>

    </tr>;
};