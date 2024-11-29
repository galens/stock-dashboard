import loader from './express';
import mysqlloader from './mysql';
import type { Express } from 'express';

export default async function({ app}: {app: Express}) {
    await mysqlloader();
    console.log('mysql loaded');

    await loader({ app });
    console.log('express loaded');
}