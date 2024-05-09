import { Request, Response } from 'express';
import { Get } from './decorators/routes';
import { Controller } from './decorators/controllers';

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
}
