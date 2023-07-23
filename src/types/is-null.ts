import { typeOf } from './typeof'

/**
 * Checks if the input is null.
 *
 * @param {unknown} input - The input value to be checked.
 * @return {boolean} Returns true if the input is null, otherwise false.
 */
export function isNull(input: unknown): input is null {
  return typeOf(input) === 'null'
}
