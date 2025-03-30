import type { Callable } from './types'

export const isDev = () => {
  return process.env.NODE_ENV !== 'production'
}

export const isProd = () => {
  return process.env.NODE_ENV === 'production'
}

export const isBool = (value: unknown): value is boolean => {
  return value === true || value === false
}

export const isArray = (value: unknown): value is any[] => {
  return Array.isArray(value)
}

export const isObjectLike = (value: unknown): value is Record<string, any> => {
  return typeof value === 'object' && value != null
}

export const isObject = (value: unknown): value is Record<string, any> => {
  return isObjectLike(value) && !isArray(value)
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !Number.isNaN(value)
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isCallable = (value: unknown): value is Callable => {
  return typeof value === 'function'
}

export const isNull = (value: unknown): value is null | undefined => {
  return value == null
}

export const hasOwnProp = <T extends string>(
  data: unknown,
  key: T,
): data is Record<T, any> => {
  return Object.prototype.hasOwnProperty.call(data, key)
}

const getObjectTag = (value: unknown) => {
  return Object.prototype.toString.call(value)
}

const callableToString = Function.prototype.toString
const objectConstructorString = callableToString.call(Object)

export const isPlainObject = (value: any) => {
  if (!isObjectLike(value) || getObjectTag(value) !== '[object Object]') {
    return false
  }

  const prototype = Object.getPrototypeOf(value)

  if (prototype === null) {
    return true
  }

  const Construtor =
    hasOwnProp(prototype, 'constructor') && prototype.constructor

  return (
    typeof Construtor === 'function' &&
    Construtor instanceof Construtor &&
    callableToString.call(Construtor) === objectConstructorString
  )
}
