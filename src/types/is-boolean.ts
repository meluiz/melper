import { typeOf } from './typeof'

/**
 * Checks if the input is a boolean value.
 *
 * @param {unknown} input - The value to be checked.
 * @return {boolean} Returns true if the input is a boolean value, otherwise returns false.
 */
export function isBoolean(input: unknown): input is boolean {
  return typeOf(input) === 'boolean'
}
