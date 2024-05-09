import 'reflect-metadata';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata('method', method, target, key);
      Reflect.defineMetadata('path', path, target, key);
    };
  };
}

export const Get = routeBinder('get');
export const Post = routeBinder('post');
export const Put = routeBinder('put');
export const Delete = routeBinder('delete');
export const Patch = routeBinder('patch');
