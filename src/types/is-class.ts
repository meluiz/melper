import { typeOf } from './typeof'

/**
 * Checks if the input is a class.
 *
 * @param {unknown} input - The input to check.
 * @returns {boolean} - True if the input is a class, false otherwise.
 */
export function isClass(input: unknown): boolean {
  return typeOf(input) === 'class'
}
