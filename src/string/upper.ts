/**
 * Converts the input string to uppercase.
 *
 * @param {string} input - The string to be converted.
 * @return {string} The input string in uppercase.
 */
export function upper<S extends string>(input: S) {
  return input.toUpperCase() as Uppercase<S>
}
