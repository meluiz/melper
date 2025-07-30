import type { Callable } from './types'

/**
 * Checks if the current environment is development.
 *
 * @returns `true` if NODE_ENV is not 'production', otherwise `false`.
 *
 * @signature
 *    isDev(): boolean
 * @example
 *    process.env.NODE_ENV = 'development'
 *    isDev() // => true
 *
 * @category Guard
 */
export const isDev = (): boolean => {
  return process.env.NODE_ENV !== 'production'
}

/**
 * Checks if the current environment is production.
 *
 * @returns `true` if NODE_ENV equals 'production', otherwise `false`.
 *
 * @signature
 *    isProd(): boolean
 * @example
 *    process.env.NODE_ENV = 'production'
 *    isProd() // => true
 *
 * @category Guard
 */
export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production'
}

/**
 * Determines whether a value is a boolean.
 *
 * @param value - The value to check.
 * @returns `true` if the value is strictly `true` or `false`, otherwise `false`.
 *
 * @signature
 *    isBool(value)
 * @example
 *    isBool(true)    // => true
 *    isBool('true')  // => false
 *
 * @category Guard
 */
export const isBool = (value: unknown): value is boolean => {
  return value === true || value === false
}

/**
 * Determines whether a value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, otherwise `false`.
 *
 * @signature
 *    isArray(value)
 * @example
 *    isArray([1, 2, 3]) // => true
 *    isArray({})        // => false
 *
 * @category Guard
 */
export const isArray = (value: unknown): value is any[] => {
  return Array.isArray(value)
}

/**
 * Determines whether a value is object-like (non-null object).
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object and not `null`, otherwise `false`.
 *
 * @signature
 *    isObjectLike(value)
 * @example
 *    isObjectLike({})   // => true
 *    isObjectLike(null) // => false
 *
 * @category Guard
 */
export const isObjectLike = (value: unknown): value is Record<string, any> => {
  return typeof value === 'object' && value != null
}

/**
 * Determines whether a value is a plain object (not an array and object-like).
 *
 * @param value - The value to check.
 * @returns `true` if the value is a plain object, otherwise `false`.
 *
 * @signature
 *    isObject(value)
 * @example
 *    isObject({})    // => true
 *    isObject([1,2]) // => false
 *
 * @category Guard
 */
export const isObject = (value: unknown): value is Record<string, any> => {
  return isObjectLike(value) && !isArray(value)
}

/**
 * Determines whether a value is a valid number and not NaN.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number and not `NaN`, otherwise `false`.
 *
 * @signature
 *    isNumber(value)
 * @example
 *    isNumber(123)    // => true
 *    isNumber(NaN)    // => false
 *
 * @category Guard
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Determines whether a value is a string.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a string, otherwise `false`.
 *
 * @signature
 *    isString(value)
 * @example
 *    isString('hello') // => true
 *    isString(123)     // => false
 *
 * @category Guard
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

/**
 * Determines whether a value is callable (a function).
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function, otherwise `false`.
 *
 * @signature
 *    isCallable(value)
 * @example
 *    isCallable(() => {}) // => true
 *    isCallable(123)      // => false
 *
 * @category Guard
 */
export const isCallable = (value: unknown): value is Callable => {
  return typeof value === 'function'
}

/**
 * Determines whether a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `null` or `undefined`, otherwise `false`.
 *
 * @signature
 *    isNull(value)
 * @example
 *    isNull(null)      // => true
 *    isNull(undefined) // => true
 *    isNull(0)         // => false
 *
 * @category Guard
 */
export const isNull = (value: unknown): value is null | undefined => {
  return value == null
}

/**
 * Checks if the specified key exists on an object.
 *
 * @param data - The object to check.
 * @param key - The property name to look for.
 * @returns `true` if the object has the specified own property, otherwise `false`.
 *
 * @signature
 *    hasOwnProp(data, key)
 * @example
 *    hasOwnProp({ a: 1 }, 'a') // => true
 *    hasOwnProp({}, 'b')       // => false
 *
 * @category Guard
 */
export const hasOwnProp = <T extends string>(
  data: unknown,
  key: T,
): data is Record<T, any> => {
  return Object.prototype.hasOwnProperty.call(data, key)
}

/**
 * Retrieves the internal `[[Class]]` tag of a value.
 *
 * @param value - The value to inspect.
 * @returns The string tag representing the value's type (e.g., '[object Object]').
 *
 * @signature
 *    getObjectTag(value)
 * @example
 *    getObjectTag({}) // => '[object Object]'
 *
 * @category Guard
 */
const getObjectTag = (value: unknown): string => {
  return Object.prototype.toString.call(value)
}

const callableToString = Function.prototype.toString
const objectConstructorString = callableToString.call(Object)

/**
 * Determines whether a value is a plain object created by the Object constructor.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a plain object, otherwise `false`.
 *
 * @signature
 *    isPlainObject(value)
 * @example
 *    isPlainObject({}) // => true
 *    isPlainObject(new Date()) // => false
 *
 * @category Guard
 */
export const isPlainObject = (value: any): boolean => {
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
