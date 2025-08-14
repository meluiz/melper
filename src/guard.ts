export type {
  ArrayType,
  BufferType,
  Callable,
  ComplexType,
  ConstructorObjectType,
  DefaultType,
  FunctionType,
  Lookup,
  SpecialObjectType,
} from './modules/guard'

export {
  default as guard,
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
} from './modules/guard'
