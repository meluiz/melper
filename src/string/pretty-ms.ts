import ms from 'ms'

interface Options {
  long: boolean
}

/**
 * A function that takes a number and an optional options object and returns a formatted string representation of the number in milliseconds.
 *
 * @param {number} value - The number to be formatted.
 * @param {Options} [options] - An optional object that contains formatting options.
 * @return {string} - The formatted string representation of the number in milliseconds.
 */
export function prettyMs(input: number, options?: Options) {
  return ms(input, options)
}
