import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['asdklgh'],
  })
);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
