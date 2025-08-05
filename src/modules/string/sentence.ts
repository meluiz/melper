/**
 * Functions is a copy/paste with adapting from `poppinss/string`.
 *
 * @credits
 * - https://github.com/poppinss/string
 */

export interface SentenceOptions {
  /**
   * Separator used between items.
   */
  separator?: string

  /**
   * Separator used between two items.
   */
  pairSeparator?: string

  /**
   * Separator used before the last item when more than two.
   */
  lastSeparator?: string
}

const DEFAULT_OPTIONS = {
  separator: ', ',
  pairSeparator: ' and ',
  lastSeparator: ', and ',
} as const

/**
 * Formats an array of values into a human-readable sentence, using the provided separators.
 *
 * @param input - The array of values to join into a sentence.
 * @param options - Configuration for separators:
 *   - `separator`: string used between items (default: ', ').
 *   - `pairSeparator`: string used between two items (default: ' and ').
 *   - `lastSeparator`: string used before the last item when more than two (default: ', and ').
 *
 * @returns A formatted sentence string.
 *
 * @signature
 *    string.sentence(["apple", "banana", "cherry"], { separator: ", ", lastSeparator: " & ", pairSeparator: " + " });
 * @example
 *    sentence(["apple", "banana", "cherry"]);
 *    // => "apple, banana, and cherry"
 *
 *    sentence(["apple", "banana"], { pairSeparator: " & " });
 *    // => "apple & banana"
 *
 *    sentence([]);
 *    // => ""
 *
 * @category String
 */
export const sentence = (input: any[], options?: SentenceOptions) => {
  const { separator, lastSeparator, pairSeparator } = Object.assign(
    {},
    DEFAULT_OPTIONS,
    options,
  )

  if (input.length <= 2) {
    if (input.length === 0) {
      return ''
    }

    if (input.length === 1) {
      return input[0]
    }

    return `${input[0]}${pairSeparator}${input[1]}`
  }

  const allButLast = input.slice(0, -1).join(separator)
  const last = input[input.length - 1]

  return `${allButLast}${lastSeparator}${last}`
}
