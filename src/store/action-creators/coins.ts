import axios, {AxiosResponse} from "axios";
import {ICoin, ICoins} from "../../types";
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
// export const fetchCoinInfo = (coin: string) => {
//     return async (dispatch: Dispatch<CoinsAction>) => {
//         try {
//             dispatch({type: CoinsActionTypes.FETCH_COIN_INFO})
//             const response: AxiosResponse<ICoins> = await axios.get(`api.coincap.io/v2/exchanges/${coin}`)
//             dispatch({type: CoinsActionTypes.FETCH_COIN_SUCCESS, payload: response.data})
//         } catch (e) {
//             dispatch({
//                 type: CoinsActionTypes.FETCH_COIN_ERROR,
//                 payload: 'Не удалось загрузить список криптовалют. Повторите позже'
//             })
//         }
//     }
// }
export const addCoinToPage = (obj: any): CoinsAction => {
    return {type: CoinsActionTypes.ADD_COIN_TO_PORTFOLIO, payload: obj}
}
export const deleteCoinFromPortfolio = (name: string): CoinsAction => {
    return {type: CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO, payload: name}
}

