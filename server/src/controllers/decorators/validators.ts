import 'reflect-metadata';
import { MetadataKeys } from './interfaces/decorators.enum';

export function BodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
  };
}
