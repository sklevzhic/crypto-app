import React, {useState} from 'react'
import {Image, Col, Row, Button, Popover, Overlay} from "react-bootstrap";
import styles from './TableCoins.module.scss'


interface TableCoinsListProps {
    name: string,
    rank: string,
    symbol: string,
    priceUsd: string,
    changePercent24Hr: string
}

export const TableCoinsItem: React.FC<TableCoinsListProps> = ({name, rank, symbol, priceUsd, changePercent24Hr}) => {
    // let {addCoinToPage} = useActions()
    const [isInput, setIsInput] = useState<boolean>(false)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

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
        <td>
            {/*<div ref={ref}>*/}
            {/*    <Button onClick={handleClick}>Holy guacamole!</Button>*/}
            {/*    <Button onClick={() => setIsInput(!isInput)}>+</Button>*/}
            {/*    <Overlay*/}
            {/*        show={show}*/}
            {/*        target={target}*/}
            {/*        placement="bottom"*/}
            {/*        container={ref}*/}
            {/*        containerPadding={20}*/}
            {/*    >*/}
            {/*        <Popover id="popover-contained">*/}
            {/*            <Popover.Header as="h3">Popover bottom</Popover.Header>*/}
            {/*            <Popover.Body>*/}
            {/*                <strong>Holy guacamole!</strong> Check this info.*/}
            {/*            </Popover.Body>*/}
            {/*        </Popover>*/}
            {/*    </Overlay>*/}
            {/*</div>*/}
        </td>



    </tr>;
};