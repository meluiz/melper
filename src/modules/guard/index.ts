import {
  hasOwnProp,
  isArray,
  isBool,
  isCallable,
  isDev,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isProd,
  isString,
} from './is'
import { lookup } from './lookup'

export type * from './types'
export type {
  ArrayType,
  BufferType,
  ComplexType,
  ConstructorObjectType,
  DefaultType,
  FunctionType,
  Lookup,
  SpecialObjectType,
} from './lookup'

export default {
  lookup,
  hasOwnProp,
  isArray,
  isBool,
  isCallable,
  isDev,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isProd,
  isString,
}

export {
  lookup,
  hasOwnProp,
  isArray,
  isBool,
  isCallable,
  isDev,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isProd,
  isString,
}
