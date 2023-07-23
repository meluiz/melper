import truncatise from 'truncatise'

interface TruncatiseOptions {
  suffix?: string
  completeWords?: boolean
}

/**
 * Generate a truncated excerpt of a given input string.
 *
 * @param {string} input - The input string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @param {TruncatiseOptions} options - (Optional) Additional options for truncation.
 * @param {boolean} options.completeWords - (Optional) Whether to complete the last word or not. Defaults to false.
 * @param {string} options.suffix - (Optional) The suffix to append to the truncated string. Defaults to '...'.
 * @return {string} The truncated string.
 */
export function excerpt(input: string, length: number, options?: TruncatiseOptions): string {
  const { completeWords = false, suffix = '...' } = options || {}

  return truncatise(input, {
    TruncateLength: length,
    Strict: completeWords === true ? false : true,
    StripHTML: true,
    TruncateBy: 'characters',
    Suffix: suffix,
  })
}
