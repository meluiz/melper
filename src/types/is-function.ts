import { typeOf } from './typeof'

/**
 * Checks if the given input is a function.
 *
 * @param {unknown} input - The value to check.
 * @return {boolean} Returns true if the input is a function, false otherwise.
 */
export function isFunction(input: unknown): input is Function {
  return typeOf(input) === 'function'
}
