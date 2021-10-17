import React from 'react'
import {Button, Col, Image, Row} from "react-bootstrap";

interface CoinPageProps {

}

export const CoinPage: React.FC<CoinPageProps> = () => {
    return <>
        <Row>
            <Row>
                <Col>
                    <Image width={30} height={30} src="https://via.placeholder.com/150" fluid/>
                </Col>
                <Col>
                    <p>Bitcoin (BTC)</p>
                </Col>
                <Col>
                    <p>HIGH$61,686.17</p>
                    <p>LOW$60,260.90</p>
                </Col>
                <Col>
                    <p>AVERAGE$60,939.38</p>
                    <p>CHANGE-0.45%</p>
                </Col>
                <Col>
                    <Button>+</Button>
                </Col>
            </Row>
            <Row>
                <Image src="https://filearchive.cnews.ru/img/news/2020/01/16/bit601.jpg" fluid/>
            </Row>
            <Col>
                <ul>
                        <li>При нажатии на элемент таблицы, открывается страница с подробной информацией по валюте,</li>
                        <li>Добавить контрол добавления в портфель</li>
                    <li> история в виде графика (можно использовать либы
                        для визуализации данных)</li>
                    <li>        При нажатии на "+", открывается модальное окно, где можно ввести количество (в т.ч. дробное)
                        криптовалюты. После сабмита, криптовалюта добавляется в портфель в указанном количестве.</li>
                </ul>
            </Col>

        </Row>
        </>;
};