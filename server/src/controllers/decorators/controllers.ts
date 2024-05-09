import 'reflect-metadata';
import { Router } from 'express';

export const router = Router();

export function Controller(routePrefix: string) {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      if (path) {
        const fullRoutePath = `${routePrefix}${path}`;
        router.get(fullRoutePath, routeHandler);
      }
    });
  };
}
