import React, {useEffect, useState} from 'react'
import {Button, Col, Image, Row} from "react-bootstrap";

import {useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypesSelector";
// @ts-ignore
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import {ModalCoins} from "../components/Modal";
import {FormAmount} from "../components/FormAmount";
import {Change} from "../components/Change";
import {rounded} from '../utils/rounded';
import {Preloader} from "../components/Preloader";
import {ErrorMessage} from "../components/ErrorMessage";


interface ParamTypes {
    coin: string
}

export const CoinPage: React.FC = () => {
    let {coin, coinHistory, loadingInfo, errorFullInfo, loadingHistory} = useTypesSelector(state => state.coins)
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    let params = useParams<ParamTypes>()
    let {fetchCoinInfo, fetchCoinHistory} = useActions()
    useEffect(() => {
        fetchCoinInfo(params.coin)
        fetchCoinHistory(params.coin)
    }, [params.coin])
    if (loadingInfo) {
        return <Preloader/>
    }
    return <>

        {
            Object.keys(coin).length !== 0 && <Row className={"pt-3 pb-3"}>
                {
                    Object.keys(coin).length !== 0 && <Row>
                        <Col xs={"1"}>
                            {
                                coin.symbol && <Image
                                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                                    width={70}
                                    height={70}
                                />
                            }
                        </Col>
                        <Col>
                            {
                                coin.changePercent24Hr && <>
                                    <h4>{coin.name} ({coin.symbol}) </h4>
                                    <h5>$ {rounded(coin.priceUsd)} <Change value={rounded(coin.changePercent24Hr)}/>
                                    </h5>
                                </>


                            }

                        </Col>
                        <Col>
                            <p>Market Cap: <b>$ {rounded(coin.marketCapUsd)}</b></p>
                            <p>Circulating Supply: <b>{rounded(coin.supply)} {coin.symbol}</b></p>
                            <p>Trading Volume: <b>$ {rounded(coin.volumeUsd24Hr)}</b></p>
                        </Col>
                        <Col xs={"1"}>
                            <Button onClick={() => setModalShow(true)}>+</Button>
                        </Col>
                    </Row>
                }
                <ModalCoins
                    show={modalShow}
                    title={"My coins"}
                    onHide={() => setModalShow(false)}
                >
                    <FormAmount symbol={coin.symbol} name={coin.name} priceUsd={coin.priceUsd}
                                onHide={() => setModalShow(false)}/>
                </ModalCoins>

            </Row>
        }
        {
            Object.keys(coinHistory).length !== 0 && <Col>
                <ResponsiveContainer width={"100%"} height={300}>
                    <LineChart data={coinHistory} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="priceUsd" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="time"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        }

        <Col>
            <ul>
                <li>При нажатии на элемент таблицы, открывается страница с подробной информацией по валюте,</li>
                <li>Добавить контрол добавления в портфель</li>
                <li> история в виде графика (можно использовать либы
                    для визуализации данных)
                </li>
                <li> При нажатии на "+", открывается модальное окно, где можно ввести количество (в т.ч. дробное)
                    криптовалюты. После сабмита, криптовалюта добавляется в портфель в указанном количестве.
                </li>
            </ul>
        </Col>
        {
            errorFullInfo && <ErrorMessage show={true} onHide={() => setShow(false)} error={errorFullInfo}/>
        }
    </>;
};