import { camelCase as changeCamelCase } from 'change-case'

/**
 * Converts a given string to camel case.
 *
 * @param {string} input - The string to convert to camel case.
 * @return {string} The resulting camel case string.
 */
export function camelCase(input: string) {
  return changeCamelCase(input)
}
