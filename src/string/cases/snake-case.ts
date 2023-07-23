import { snakeCase as changeSnakeCase } from 'change-case'

/**
 * Converts a string to snake case.
 *
 * @param {string} input - The string to be converted to snake case.
 * @return {string} The input string converted to snake case.
 */
export function snakeCase(input: string) {
  return changeSnakeCase(input)
}
