export interface CoinsState {
    coins: any[],
    loading: boolean,
    error: string | null
}

export enum CoinsActionTypes {
    FETCH_COINS = 'FETCH_COINS',
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

interface FetchCoinsErrorAction {
    type: CoinsActionTypes.FETCH_COINS_ERROR,
    payload: string
}
export type CoinsAction = FetchCoinsAction | FetchCoinsSuccessAction | FetchCoinsErrorAction