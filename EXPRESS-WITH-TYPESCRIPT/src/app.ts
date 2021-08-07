import * as express from 'express';
import catsRouter from './routes/cats';

const app: express.Express = express();
const port: number = 8000;

// logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('using logging Middleware');
    next();
  },
);

// JSON middleware
app.use(express.json());

app.use(catsRouter);

// 404 middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('using error Middleware');
    res.send({ error: '404 not found error' });
  },
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
