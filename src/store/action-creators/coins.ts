import axios, {AxiosResponse} from "axios";
import {ICoin, ICoinHistory, ICoins, IPortfolioItem} from "../../types";
import {CoinsAction, CoinsActionTypes} from "../../types/coins";
import {Dispatch} from "redux";

export const fetchCoins = (limit: number, offset: number) => {
    return async (dispatch: Dispatch<CoinsAction>) => {
        try {
            dispatch({type: CoinsActionTypes.FETCH_COINS})
            const response: AxiosResponse<ICoins> = await axios.get(`https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`)
            dispatch({type: CoinsActionTypes.FETCH_COINS_SUCCESS, payload: response.data.data})
        } catch (e) {
            dispatch({
                type: CoinsActionTypes.FETCH_COINS_ERROR,
                payload: 'Не удалось загрузить список криптовалют. Повторите позже'
            })
        }
    }
}
export const fetchCoinInfo = (coin: string) => {
    return async (dispatch: Dispatch<CoinsAction>) => {
        try {
            dispatch({type: CoinsActionTypes.FETCH_COIN_INFO})

            const response: AxiosResponse<ICoin> = await axios.get(`https://api.coincap.io/v2/assets/${coin}7aa442c5-943e-484b-a7fb-d47ae5794f22`)
            if (response.status === 200) {
                dispatch({type: CoinsActionTypes.FETCH_COIN_INFO_SUCCESS, payload: response.data})
            }
        } catch (e) {
            dispatch({
                type: CoinsActionTypes.FETCH_COIN_INFO_ERROR,
                payload: 'Не удалось загрузить подробную информацию. Повторите позже'
            })
        }
    }
}
export const fetchCoinHistory = (coin: string) => {
    return async (dispatch: Dispatch<CoinsAction>) => {
        try {
            dispatch({type: CoinsActionTypes.FETCH_COIN_HISTORY})
            const response: AxiosResponse<ICoinHistory> = await axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`)
            if (response.status === 200) {
                dispatch({type: CoinsActionTypes.FETCH_COIN_HISTORY_SUCCESS, payload: response.data})
            }
        } catch (e) {
            dispatch({
                type: CoinsActionTypes.FETCH_COIN_HISTORY_ERROR,
                payload: 'Не удалось загрузить историю криптовалюты'
            })
        }
    }
}
export const addCoinToPage = (obj: any): CoinsAction => {
    return {type: CoinsActionTypes.ADD_COIN_TO_PORTFOLIO, payload: obj}
}
export const deleteCoinFromPortfolio = (name: string): CoinsAction => {
    return {type: CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO, payload: name}
}
export const setPortfolio = (obj: IPortfolioItem[]): CoinsAction => {
    return {type: CoinsActionTypes.SET_PORTFOLIO, payload: obj}
}

