import * as Pluralize from 'pluralize'

/**
 * Pluralizes a word.
 *
 * @param {string} input - The word to be pluralized.
 * @return {string} The plural form of the word.
 */
export function pluralize(input: string) {
  return Pluralize.plural(input)
}
