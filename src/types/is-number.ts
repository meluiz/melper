import { typeOf } from './typeof'

/**
 * Checks if the input is a number.
 *
 * @param {unknown} input - The input value to be checked.
 * @return {boolean} Returns true if the input is a number, otherwise false.
 */
export function isNumber(input: unknown): input is number {
  return typeOf(input) === 'number'
}
