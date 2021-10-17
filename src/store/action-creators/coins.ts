import axios, {AxiosResponse} from "axios";
import {ICoin, ICoins} from "../../types";
import {CoinsAction, CoinsActionTypes} from "../../types/coins";
import {Dispatch} from "redux";

export const fetchCoins = () => {
    return async (dispatch: Dispatch<CoinsAction>) => {
        try {
            dispatch({type: CoinsActionTypes.FETCH_COINS})
            const response: AxiosResponse<ICoins> = await axios.get('https://api.coincap.io/v2/assets?limit=10')
            dispatch({type: CoinsActionTypes.FETCH_COINS_SUCCESS, payload: response.data.data})
        } catch (e) {
            dispatch({type: CoinsActionTypes.FETCH_COINS_ERROR, payload: 'Не удалось загрузить список криптовалют. Повторите позже'})
        }
    }
}
export const addCoinToPage = (obj: any): CoinsAction => {
    return {type: CoinsActionTypes.ADD_COIN_TO_PORTFOLIO, payload: obj}
}