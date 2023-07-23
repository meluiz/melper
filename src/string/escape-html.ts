import he, { type EncodeOptions } from 'he'
import { encodeSymbols } from './encode-symbols'

interface Opitons {
  encodeSymbols?: boolean
}

/**
 * Escapes HTML characters in a given input string.
 *
 * @param {string} input - The input string to escape HTML characters from.
 * @param {Opitons} options - (Optional) The options object.
 * @param {boolean} options.encodeSymbols - (Optional) Whether to encode symbols in the input string.
 * @return {string} - The input string with HTML characters escaped.
 */
export function escapeHTML(input: string, options?: Opitons) {
  input = he.escape(input)

  if (options && options.encodeSymbols) {
    input = encodeSymbols(input, { allowUnsafeSymbols: true })
  }

  return input
}
