/**
 * Capitalizes the first letter of a given string.
 *
 * @param input - The string to be capitalized.
 * @returns The string with its first character in uppercase.
 * @throws {TypeError} If the input value is not a string.
 *
 * @signature
 *    string.capitalize(value)
 * @example
 *    capitalize("hello") // => "Hello"
 *    capitalize("john") // => "John"
 *    capitalize("") // => ""
 * @category String
 */

export const capitalize = <T extends string>(input: T): Capitalize<T> => {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string.')
  }

  return `${input.charAt(0)?.toUpperCase() ?? ''}${input.slice(1)}` as Capitalize<T>
}
