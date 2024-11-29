import { Router } from 'express';
import { getStocks, saveStock, removeStock } from '../db/stocks';
import { isAlphaNumeric } from '../utilities/validation';

export default function (app: Router) {
    const route = Router();
    app.use('/stocks', route);

    route.get('/', (req, res) => {
        try {
            const results = getStocks();
            res.json(results);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' }).end();
        }
    });

    route.post('/', (req, res) => {
        try {
            const { body } = req;
            console.log('body: ', body);
            if (!body || !body?.ticker || !isAlphaNumeric(body?.ticker)) {
                res.status(400).json({ error: 'Malformed Request' }).end();
            } else {
                saveStock(body.ticker);
                res.json({ success: true });
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