export interface ICoins {
    data: ICoin[];
    timestamp: number;
}

export interface ICoin {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    maxSupply: string,
    supply: string,
    marketCapUsd: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer?: string,
}
export interface ICoinHistory {
    priceUsd: string,
    time: number,
}

export interface IPortfolioItem {
    amount: string
    holdings: number
    name: string
    priceUsd: string
    symbol: string
}
