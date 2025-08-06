import { getTruncatedString } from './utils/helpers'

export interface TruncateOptions {
  /**
   * Whether to strictly truncate at the character limit (default: true).
   */
  strict?: boolean

  /**
   * String appended to the result if truncation occurs.
   */
  ellipsis?: string
}

const DEFAULT_OPTIONS = {
  strict: true,
  ellipsis: '...',
} as const

/**
 * Truncates the input string to a specified number of characters, preserving HTML tags,
 * and appending an ellipsis if the string exceeds that length.
 *
 * @param input - The string to truncate.
 * @param length - The maximum number of characters for the truncated string.
 * @param options - Configuration for truncation:
 *   - `strict`: whether to strictly truncate at the character limit (default: true).
 *   - `ellipsis`: string appended to the result if truncation occurs (default: '...').
 * @returns A new string truncated to the specified length, with HTML tags preserved and an ellipsis if truncated.
 * @throws {TypeError} If the input value is not a string.
 *
 * @signature
 *    string.truncate("<p>Hello <strong>World</strong></p>", 7);
 * @example
 *    truncate("Hello World", 5);
 *    // => "Hello..."
 *
 *    truncate("<p>Hello <em>friend</em></p>", 10);
 *    // => "<p>Hello <em>fr...</em></p>"
 *
 * @category String
 */
export const truncate = (
  input: string,
  length: number,
  options?: TruncateOptions,
) => {
  const { strict, ellipsis } = Object.assign(DEFAULT_OPTIONS, options)

  return getTruncatedString(input, length, {
    strict,
    ellipsis,
    tags: true,
    type: 'characters',
  })
}
