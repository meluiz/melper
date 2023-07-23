import he, { type EncodeOptions } from 'he'

/**
 * Encodes symbols in a string using the specified options.
 *
 * @param {string} input - The string to encode.
 * @param {EncodeOptions} [options] - The options for encoding.
 * @return {string} - The encoded string.
 */
export function encodeSymbols(input: string, options?: EncodeOptions) {
  return he.encode(input, options)
}
