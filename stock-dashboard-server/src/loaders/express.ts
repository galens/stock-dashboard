import express from 'express';
import type { Express } from 'express';
import indexRouter from '../routes';
import cors from 'cors';

export default async function ({ app }: { app: Express}) {
    app.get('/status', (req, res) => res.sendStatus(200).end());
    app.use(cors());
    app.use(express.json());
    app.use('/v1', indexRouter());
}