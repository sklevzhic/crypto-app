import {CoinsAction, CoinsActionTypes, CoinsState } from "../../types/coins"


const initialState: CoinsState = {
    coins: [],
    loading: false,
    error: null
}

export const coinsReducer = (state = initialState, action: CoinsAction): CoinsState => {
    switch (action.type) {
        case CoinsActionTypes.FETCH_COINS:
            return {loading: true, error: null, coins: []}
        case CoinsActionTypes.FETCH_COINS_SUCCESS:
            return {loading: false, error: null, coins: action.payload}
        case CoinsActionTypes.FETCH_COINS_ERROR:
            return {loading: false, error: action.payload, coins: []}

        default:
            return state
    }
}