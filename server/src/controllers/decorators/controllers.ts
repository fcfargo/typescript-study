import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function Controller(routePrefix: string) {
  const router = AppRouter.getInstance();

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
