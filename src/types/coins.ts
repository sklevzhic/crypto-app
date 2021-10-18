export interface CoinsState {
    coins: any[],
    coin: any,
    portfolio: any[],
    loading: boolean,
    loadingInfo: boolean
    error: string | null,
    errorFullInfo: string | null,
    rowsPerPage: number,
    offset: number
}

export enum CoinsActionTypes {
    FETCH_COINS = 'FETCH_COINS',
    FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
    FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
    FETCH_COIN_INFO = 'FETCH_COIN_INFO',
    FETCH_COIN_INFO_SUCCESS = 'FETCH_COIN_INFO_SUCCESS',
    FETCH_COIN_INFO_ERROR = 'FETCH_COIN_INFO_ERROR',
    ADD_COIN_TO_PORTFOLIO = 'ADD_COIN_TO_PORTFOLIO',
    DELETE_COIN_FROM_PORTFOLIO = 'DELETE_COIN_FROM_PORTFOLIO',

}

interface FetchCoinsAction {
    type: CoinsActionTypes.FETCH_COINS,
}

interface FetchCoinsSuccessAction {
    type: CoinsActionTypes.FETCH_COINS_SUCCESS,
    payload: any[]
}

interface FetchCoinsErrorAction {
    type: CoinsActionTypes.FETCH_COINS_ERROR,
    payload: string
}

interface FetchCoinInfoAction {
    type: CoinsActionTypes.FETCH_COIN_INFO,
}

interface FetchCoinInfoSuccessAction {
    type: CoinsActionTypes.FETCH_COIN_INFO_SUCCESS,
    payload: any
}

interface FetchCoinInfoErrorAction {
    type: CoinsActionTypes.FETCH_COIN_INFO_ERROR,
    payload: string
}

interface AddCoinToPortfolioAction {
    type: CoinsActionTypes.ADD_COIN_TO_PORTFOLIO,
    payload: any
}

interface DeleteCoinFromPortfolioAction {
    type: CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO,
    payload: string
}


export type CoinsAction = FetchCoinsAction
    | FetchCoinsSuccessAction
    | FetchCoinsErrorAction
    | FetchCoinInfoAction
    | FetchCoinInfoSuccessAction
    | FetchCoinInfoErrorAction
    | AddCoinToPortfolioAction
    | DeleteCoinFromPortfolioAction