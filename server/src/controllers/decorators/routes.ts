import 'reflect-metadata';

export function Get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    Reflect.defineMetadata('path', path, target, key);
  };
}
