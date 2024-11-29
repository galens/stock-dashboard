import { Router } from 'express';
import { getStocks, saveStock, removeStock, getStock } from '../db/stocks';
import { isAlphaNumeric } from '../utilities/validation';
import { getPrice } from '../utilities/getPrice';  // we are randomly generating prices but we'd be calling
                                                   // an external api endpoint in this method normally

export default function (app: Router) {
    const route = Router();
    app.use('/stocks', route);

    route.get('/', async (req, res) => {
        try {
            const results = await getStocks();
            let resultsWithPrice = [];
            if (results.length) {
                for (const stock of results) {
                    console.log('stock: ', stock);
                    resultsWithPrice.push({ name: stock.ticker, price: getPrice() })
                }
            }
            res.json({ success: true, data: resultsWithPrice });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' }).end();
        }
    });

    route.post('/', async (req, res) => {
        try {
            const { body } = req;
            if (!body || !body?.ticker || !isAlphaNumeric(body?.ticker)) {
                res.status(400).json({ error: 'Malformed Request' }).end();
            } else {
                const result = await getStock(body.ticker);
                console.log('result: ', result);
                if (result.length === 0) {
                    saveStock(body.ticker);
                    res.json({ success: true });
                } else {
                    res.json({ error: `Error: Stock ${body?.ticker} already exists` })
                }
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' }).end();
        }
    });

    route.delete('/:ticker', (req, res) => {
        try {
            const {
                params: { ticker },
              } = req;
            if (!ticker || !isAlphaNumeric(ticker)) {
                res.status(400).json({ error: 'Malformed Request' }).end();
            } else {
                removeStock(ticker);
                res.json({ success: true });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' }).end();
        }
    });

    return route;
}