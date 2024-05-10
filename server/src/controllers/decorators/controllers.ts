import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys, Methods } from './interfaces/decorators.enum';
import { NextFunction, Request, RequestHandler, Response } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
    return;
  };
}

export function Controller(routePrefix: string) {
  const router = AppRouter.getInstance();

  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      const requestBodyProps =
        Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) ||
        [];

      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );
      if (path) {
        const method: Methods = Reflect.getMetadata(
          MetadataKeys.METHOD,
          target.prototype,
          key
        );

        const fullRoutePath = `${routePrefix}${path}`;

        const validator = bodyValidators(requestBodyProps);

        router[method](fullRoutePath, ...middlewares, validator, routeHandler);
      }
    });
  };
}
