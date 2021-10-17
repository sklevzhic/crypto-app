import {CoinsAction, CoinsActionTypes, CoinsState } from "../../types/coins"


const initialState: CoinsState = {
    coins: [],
    portfolio: [],
    loading: false,
    error: null
}

export const coinsReducer = (state = initialState, action: CoinsAction): CoinsState => {
    switch (action.type) {
        case CoinsActionTypes.FETCH_COINS:
            return {...state, loading: true, error: null, coins: []}
        case CoinsActionTypes.FETCH_COINS_SUCCESS:
            return {...state, loading: false, error: null, coins: action.payload}
        case CoinsActionTypes.FETCH_COINS_ERROR:
            return {...state, loading: false, error: action.payload, coins: []}
        case CoinsActionTypes.ADD_COIN_TO_PORTFOLIO:
            return {...state, portfolio: [...state.portfolio, action.payload]}
        default:
            return state
    }
}