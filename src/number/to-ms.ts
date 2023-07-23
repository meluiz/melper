import ms from 'ms'

/**
 * Converts a string or number value to milliseconds.
 *
 * @param {string | number} input - The value to be converted.
 * @return {number} The value converted to milliseconds.
 */
export function toMs(input: string | number) {
  if (typeof input === 'number') {
    return input
  }

  return ms(input)
}
