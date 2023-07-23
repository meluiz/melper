import truncatise from 'truncatise'

interface TruncatiseOptions {
  suffix?: string
  completeWords?: boolean
}

/**
 * Truncates a given string to a specified length.
 *
 * @param {string} input - The input string to be truncated.
 * @param {number} length - The desired length of the truncated string.
 * @param {TruncatiseOptions} options - (Optional) Additional options for truncation.
 * @param {boolean} options.completeWords - (Optional) If true, the truncated string will end at a complete word.
 * @param {string} options.suffix - (Optional) The suffix to be appended to the truncated string.
 * @return {string} - The truncated string.
 */
export function truncate(input: string, length: number, options?: TruncatiseOptions): string {
  const { completeWords = false, suffix = '...' } = options || {}

  return truncatise(input, {
    TruncateLength: length,
    Strict: completeWords === true ? false : true,
    StripHTML: false,
    TruncateBy: 'characters',
    Suffix: suffix,
  })
}
