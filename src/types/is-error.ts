import { typeOf } from './typeof'

/**
 * Checks whether the given input is an error.
 *
 * @param {unknown} input - The input to check.
 * @return {boolean} Returns true if the input is an error, false otherwise.
 */
export function isError(input: unknown): boolean {
  return typeOf(input) === 'error'
}
