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
            if (state.portfolio.some(el => el.name === action.payload.name)) {
                return {...state, portfolio: state.portfolio.map(el => {
                    if (el.name === action.payload.name) {
                        return {...el, amount: +el.amount + +action.payload.amount}
                    } else {
                        return el
                    }

                    })}
            } else {
                return {...state, portfolio: [...state.portfolio, action.payload]}
            }

        case CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO:
            return {...state, portfolio: state.portfolio.filter(el => el.name !== action.payload)}
        default:
            return state
    }
}