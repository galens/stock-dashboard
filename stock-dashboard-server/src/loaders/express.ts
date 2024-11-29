import express from 'express';
import type { Express } from 'express';
import indexRouter from '../routes';

export default async function ({ app }: { app: Express}) {
    app.get('/status', (req, res) => res.sendStatus(200).end());

    app.use('/v1', indexRouter());
}