import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './interfaces/decorators.enum';

export function Use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
