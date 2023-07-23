import { dotCase as changeDotCase } from 'change-case'

/**
 * Converts a string to dot case.
 *
 * @param {string} input - The input string to be converted.
 * @return {string} The dot case string.
 */
export function dotCase(input: string) {
  return changeDotCase(input)
}
