import bytes, { BytesOptions } from 'bytes'

/**
 * Converts a number value to a human-readable string representing a file size.
 *
 * @param {number} value - The number value to be converted.
 * @param {BytesOptions} [options] - The optional configuration options.
 * @return {string} A human-readable string representing the file size.
 */
export function prettyBytes(value: number, options?: BytesOptions) {
  return bytes.format(value, options)
}
