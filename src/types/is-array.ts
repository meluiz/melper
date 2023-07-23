import { typeOf } from './typeof'

/**
 * Determines whether the input is an array of a specific type.
 *
 * @param {unknown} input - The input to be checked.
 * @return {boolean} True if the input is an array of a specific type, false otherwise.
 */
export function isArray<T>(input: unknown): input is T[] {
  return typeOf(input) === 'array'
}
