import { NextFunction, Request, Response } from 'express';
import { Get, Controller, Post, BodyValidator } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const requestSession = req.session;
  if (requestSession && requestSession.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('Not permitted');
  }
}

@Controller('/auth')
class LoginController {
  @Get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
    `);
  }

  @Post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'fcfargo90@gmail.com' && password === '1234') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}
