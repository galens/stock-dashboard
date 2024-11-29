import { Router } from 'express';
import { getStocks } from '../db/stocks';

export default function (app: Router) {
    const route = Router();
    app.use('/stocks', route);

    route.get('/', (req, res, next) => {
        try {
            const results = getStocks();
            res.json(results);
        } catch (error) {
            next(error);
        }
    });

    return route;
}