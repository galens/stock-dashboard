import Query from './query';

export function getStocks() {
    return Query('SELECT * from stocks;');
}