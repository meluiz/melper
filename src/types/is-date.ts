import { typeOf } from './typeof'

/**
 * Determines whether the input is a Date object.
 *
 * @param {unknown} input - The input value to check.
 * @return {boolean} Returns true if the input is a Date object, otherwise false.
 */
export function isDate(input: unknown): input is Date {
  return typeOf(input) === 'date'
}
