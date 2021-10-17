import React from 'react'
import {Image, Card, Col} from "react-bootstrap";
import styles from './PopularCoins.module.scss'

interface PopularCoinsProps {

}

export const PopularCoins: React.FC<PopularCoinsProps> = () => {
    return <>
        <div className={styles.header__coins}>
            {
                [1, 2, 3].map(el => {
                    return <Card key={el} className={styles.header__coin} style={{background: "#ffc0d1"}}>
                        <Col xs={3} className={styles.coin__image}>
                            <Image roundedCircle={true} width={30} height={30} src="https://via.placeholder.com/150"
                                   fluid/>
                            <p className={styles.coin__name}>BTC</p>
                        </Col>
                        <Col className={styles.coin__info}>
                            <p className={styles.coin__price}>134,32 USD</p>
                            <p className={styles.coin__change}>+2,38 <span>(1,80 %)</span></p>
                        </Col>
                    </Card>
                })
            }

        </div>
    </>;
};