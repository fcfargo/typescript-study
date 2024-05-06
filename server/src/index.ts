import express, { Express, Request, Response } from 'express';
import { router as loginRouter } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['asdklgh'],
  })
);
app.use(loginRouter);

app.listen(3000, () => {
  console.log(`listening on port 8000`);
});
