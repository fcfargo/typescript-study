import { NextFunction, Request, Response } from 'express';
import { Controller, Get, Use } from './decorators';

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

@Controller('')
class RootController {
  @Get('/')
  getRoot(req: Request, res: Response) {
    const requestSession = req.session;
    if (requestSession && requestSession.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @Get('/protected')
  @Use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}
