import { typeOf } from './typeof'

/**
 * Checks if the given input is a string.
 *
 * @param {unknown} input - The input to be checked.
 * @return {boolean} Returns true if the input is a string, false otherwise.
 */
export function isString(input: unknown): input is string {
  return typeOf(input) === 'string'
}
