import {CoinsAction, CoinsActionTypes, CoinsState} from "../../types/coins"
import {ICoinHistory} from "../../types";


const initialState: CoinsState = {
    coins: [],
    coin: {},
    coinHistory: [],
    portfolio: [],
    loading: false,
    loadingInfo: false,
    loadingHistory: false,
    error: null,
    errorFullInfo: null,
    errorLoadingHistory: null,
    rowsPerPage: 10,
    offset: 0,
    sumPortfolio: 0
}

export const coinsReducer = (state = initialState, action: CoinsAction): CoinsState => {
    switch (action.type) {
        case CoinsActionTypes.FETCH_COINS:
            return {...state, loading: true}
        case CoinsActionTypes.FETCH_COINS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                coins: [...state.coins, ...action.payload],
                offset: state.offset + 10
            }
        case CoinsActionTypes.FETCH_COINS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CoinsActionTypes.FETCH_COIN_INFO:
            return {...state, loadingInfo: true}
        case CoinsActionTypes.FETCH_COIN_INFO_SUCCESS:
            return {
                ...state,
                loadingInfo: false,
                errorFullInfo: "",
                coin: action.payload.data,
            }
        case CoinsActionTypes.FETCH_COIN_INFO_ERROR:
            return {
                ...state,
                loadingInfo: false,
                errorFullInfo: action.payload
            }
        case CoinsActionTypes.FETCH_COIN_HISTORY:
            return {...state, loadingHistory: true}
        case CoinsActionTypes.FETCH_COIN_HISTORY_SUCCESS:

            return {
                ...state,
                loadingHistory: false,
                errorLoadingHistory: "",
                coinHistory: action.payload.data.map((el: ICoinHistory) => {
                    return {...el, time: new Date(el.time).toLocaleDateString()}
                }),
            }
        case CoinsActionTypes.FETCH_COIN_HISTORY_ERROR:
            return {
                ...state,
                loadingHistory: false,
                errorLoadingHistory: action.payload
            }
        case CoinsActionTypes.SET_PORTFOLIO:
            return {...state, portfolio: action.payload}
        case CoinsActionTypes.ADD_COIN_TO_PORTFOLIO:
            if (state.portfolio.some(el => el.name === action.payload.name)) {
                return {
                    ...state,
                    portfolio: state.portfolio.map(el => {
                        if (el.name === action.payload.name) {
                            return {
                                ...el,
                                amount: +el.amount + +action.payload.amount,
                                priceUsd: action.payload.priceUsd,
                                holdings: +el.holdings + +action.payload.holdings
                            }
                        } else {
                            return el
                        }

                    })
                }
            } else {
                return {
                    ...state,
                    portfolio: [...state.portfolio, action.payload]
                }
            }
        case CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO:
            return {...state, portfolio: state.portfolio.filter(el => el.name !== action.payload)}
        default:
            return state
    }
}