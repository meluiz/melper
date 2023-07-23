/**
 * Converts the input string to lowercase.
 *
 * @param {string} input - The string to be converted.
 * @return {string} The input string in lowercase.
 */
export function lower<S extends string>(input: S) {
  return input.toLowerCase() as Lowercase<S>
}
