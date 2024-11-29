import express from 'express';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = 3001;

async function startServer() {
    const app = express();

    (await import('./loaders')).default({ app })

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    })
    .on('error', error => {
        console.log(error.message);
        process.exit(1);
    })
}

startServer();