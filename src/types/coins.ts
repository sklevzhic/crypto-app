export interface CoinsState {
    coins: any[],
    portfolio: any[],
    loading: boolean,
    error: string | null
}

export enum CoinsActionTypes {
    FETCH_COINS = 'FETCH_COINS',
    ADD_COIN_TO_PORTFOLIO = 'ADD_COIN_TO_PORTFOLIO',
    FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
    FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
}

interface FetchCoinsAction {
    type: CoinsActionTypes.FETCH_COINS,
}

interface FetchCoinsSuccessAction {
    type: CoinsActionTypes.FETCH_COINS_SUCCESS,
    payload: any[]
}
interface AddCoinToPortfolioAction {
    type: CoinsActionTypes.ADD_COIN_TO_PORTFOLIO,
    payload: any
}

interface FetchCoinsErrorAction {
    type: CoinsActionTypes.FETCH_COINS_ERROR,
    payload: string
}
export type CoinsAction = FetchCoinsAction | FetchCoinsSuccessAction | FetchCoinsErrorAction | AddCoinToPortfolioAction