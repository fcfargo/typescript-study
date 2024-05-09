import express, { Express, Request, Response } from 'express';
import { router as controllerRouter } from './controllers/decorators/controllers';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['asdklgh'],
  })
);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
