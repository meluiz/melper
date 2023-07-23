import { typeOf } from './typeof'

/**
 * Checks whether the input is an object.
 *
 * @param {unknown} input - The value to be checked.
 * @return {boolean} Returns true if the input is an object, otherwise returns false.
 */
export function isObject(input: unknown): boolean {
  return typeOf(input) === 'object'
}
