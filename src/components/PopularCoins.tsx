import React from 'react'
import popular from '../assets/img/GainnerIcon.png'
import {Image, Card, Row, Col} from 'react-bootstrap'
import {useTypesSelector} from "../hooks/useTypesSelector";
import {Change} from "./Change";
import {rounded} from "../utils/rounded";
import {useHistory} from "react-router-dom";

interface PopularCoinsProps {

}

export const PopularCoins: React.FC<PopularCoinsProps> = () => {
    let router = useHistory();
    let {coins} = useTypesSelector(state => state.coins)
    return <>
        <div className={"d-flex justify-content-center"}>
            {
                Object.keys(coins).length !== 0 && <>
                    {
                        [0, 1, 2].map(el => {
                            return <div onClick={() => router.push(`/coins/${coins[el].name.toLowerCase()}`)} className={"m-1"} style={{cursor: "pointer"}}>
                                <Image width={30}
                                       src={`https://assets.coincap.io/assets/icons/${coins[el].symbol.toLowerCase()}@2x.png`}
                                />
                                <span> {coins[el].symbol} <Change value={rounded(coins[el].changePercent24Hr)}/></span>
                            </div>
                        })
                    }
                </>
            }


        </div>

    </>
};