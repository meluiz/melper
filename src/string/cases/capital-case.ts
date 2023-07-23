import { capitalCase as changeCapitalCase } from 'change-case'

/**
 * Capitalizes the first letter of a given input string.
 *
 * @param {string} input - The input string to be capitalized.
 * @return {string} The capitalized string.
 */
export function capitalCase(input: string) {
  return changeCapitalCase(input)
}
