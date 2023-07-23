import { typeOf } from './typeof'

/**
 * Checks if the input is undefined.
 *
 * @param {any} input - The input value to check.
 * @return {boolean} Returns true if the input is undefined, false otherwise.
 */
export function isUndefined(input: any): input is undefined {
  return typeOf(input) === 'undefined'
}
