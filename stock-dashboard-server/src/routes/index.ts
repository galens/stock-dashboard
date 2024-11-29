import { Router } from 'express';
import stocksRouter from './stocks';

export default function () {
    const app = Router();
    
    stocksRouter(app);

    return app;
}