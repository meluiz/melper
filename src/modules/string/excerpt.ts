import { getTruncatedString } from './utils/helpers'

export interface ExcerptOptions {
  /**
   * Whether to strictly truncate at the limit, allowing breaking words.
   */
  strict?: boolean

  /**
   * String appended to the result if truncation occurs.
   */
  ellipsis?: string

  /**
   * When true, the `length` represents the number of words instead of characters.
   */
  words?: boolean
}

const DEFAULT_OPTIONS = {
  strict: false,
  ellipsis: '...',
  words: false,
} as const

/**
 * Creates a truncated excerpt of the input string limited to a specified number of characters,
 * appending an ellipsis if the string exceeds that length.
 *
 * @param input - The string to excerpt.
 * @param length - The maximum number of characters for the excerpt.
 * @param options - Configuration for generating the excerpt:
 *   - `strict`: boolean indicating whether to strictly truncate at the character limit (default: true).
 *   - `ellipsis`: string appended to the result if truncation occurs (default: '...').
 * @returns A new string truncated to the specified length, with an ellipsis if truncated.
 * @throws {TypeError} If the input value is not a string.
 *
 * @signature
 *    string.excerpt("Lorem ipsum dolor sit amet", 11);
 * @example
 *    excerpt("Lorem ipsum dolor sit amet", 11);
 *    // => "Lorem ipsum..."
 *
 *    excerpt("Short text", 20);
 *    // => "Short text"
 *
 * @category String
 */
export const excerpt = (
  input: string,
  length: number,
  options?: ExcerptOptions,
) => {
  const { strict, ellipsis, words } = Object.assign(DEFAULT_OPTIONS, options)

  return getTruncatedString(input, length, {
    strict,
    ellipsis,
    tags: false,
    type: words ? 'words' : 'characters',
  })
}
