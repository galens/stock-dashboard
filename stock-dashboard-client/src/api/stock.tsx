import { get, post, remove } from '../utilities/handlers';

export const getStocks = () => {
    return get('stocks');
};

export const addStock = (ticker: string) => {
    return post('stocks', { ticker });
}

export const deleteStock = (ticker: string) => {
    return remove(`stocks/${ticker}`);
}