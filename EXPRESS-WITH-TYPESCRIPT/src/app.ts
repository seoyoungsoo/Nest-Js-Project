import * as express from 'express';
import catsRouter from './routes/cats';

const port: number = 8000;

// 싱글톤 패턴을 적용
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('using logging Middleware');
      next();
    });

    // JSON middleware
    // POST로 들어온 JSON 형식을 읽어들일 수 있게함
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('using error Middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
