import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys, Methods } from './interfaces/decorater.enum';

export function Controller(routePrefix: string) {
  const router = AppRouter.getInstance();

  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

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

        router[method](fullRoutePath, routeHandler);
      }
    });
  };
}
