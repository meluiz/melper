import { typeOf } from './typeof'

/**
 * Checks if the input is a Buffer.
 *
 * @param {unknown} input - The value to be checked.
 * @return {boolean} Returns true if the input is a Buffer, false otherwise.
 */
export function isBuffer(input: unknown): input is Buffer {
  return typeOf(input) === 'buffer'
}
