import { typeOf } from './typeof'

/**
 * Checks if the input is a regular expression.
 *
 * @param {unknown} input - The input to be checked.
 * @return {boolean} Returns true if the input is a regular expression, false otherwise.
 */
export function isRegExp(input: unknown): input is RegExp {
  return typeOf(input) === 'regexp'
}
