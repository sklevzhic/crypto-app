export interface CoinsState {
    coins: any[],
    portfolio: any[],
    loading: boolean,
    error: string | null,
    rowsPerPage: number,
    offset: number
}

export enum CoinsActionTypes {
    FETCH_COINS = 'FETCH_COINS',
    ADD_COIN_TO_PORTFOLIO = 'ADD_COIN_TO_PORTFOLIO',
    FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
    FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
    DELETE_COIN_FROM_PORTFOLIO = 'DELETE_COIN_FROM_PORTFOLIO',
    CHANGE_NUMBER_OF_ROWS_IN_THE_TABLE = 'CHANGE_NUMBER_OF_ROWS_IN_THE_TABLE',
    CHANGE_OFFSET = 'CHANGE_OFFSET'

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

interface DeleteCoinFromPortfolioAction {
    type: CoinsActionTypes.DELETE_COIN_FROM_PORTFOLIO,
    payload: string
}

interface FetchCoinsErrorAction {
    type: CoinsActionTypes.FETCH_COINS_ERROR,
    payload: string
}

interface changeNumberOfRowsInTheTableAction {
    type: CoinsActionTypes.CHANGE_NUMBER_OF_ROWS_IN_THE_TABLE,
    payload: number
}

interface changeOffsetAction {
    type: CoinsActionTypes.CHANGE_OFFSET,
    payload: number
}

export type CoinsAction = FetchCoinsAction
    | FetchCoinsSuccessAction
    | FetchCoinsErrorAction
    | AddCoinToPortfolioAction
    | DeleteCoinFromPortfolioAction
    | changeNumberOfRowsInTheTableAction
    | changeOffsetAction