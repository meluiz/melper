import { pascalCase as changePascalCase } from 'change-case'

/**
 * Converts the given string to pascal case.
 *
 * @param {string} input - The string to be converted to pascal case.
 * @return {string} The converted string in pascal case.
 */
export function pascalCase(input: string) {
  return changePascalCase(input)
}
