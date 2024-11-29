import Query from './query';

export function getStocks() {
    return Query('SELECT * from stocks;');
}

export function saveStock(ticker: string) {
    return Query(`INSERT INTO stocks (ticker) VALUES ('${ticker}');`);
}

export function removeStock(ticker: string) {
    return Query(`DELETE FROM stocks WHERE ticker = '${ticker}'`);
}