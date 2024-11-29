import { createPool } from 'mysql2';
import type { PoolConnection, Pool } from 'mysql2';

const state: { pool: Pool } = {
    pool: null
}

export function get(): Pool {
    return state.pool;
}

export default async function () {
    state.pool = createPool({
        host: 'localhost',
        user: 'root',           // we would normally never hardcode these values here
        password: 'password',   // we would normally never hardcode these values here
        database: 'truckbase',
        timezone: 'utc',
        dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP']
    });

    state.pool.on('connection', (conn) => {
        conn.query("SET time_zone='+00:00';", err => {
            if (err) {
                throw err;
            }
        });
    });
}