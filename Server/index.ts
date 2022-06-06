import express from 'express';

const app: express.Application = express();

const port: number = 3001;

app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});

app.listen(port, () => {
    console.log(`Express
         http://localhost:${port}/`);
});