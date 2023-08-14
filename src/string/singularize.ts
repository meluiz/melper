import * as Singularize from 'pluralize'

/**
 * Singularizes a word.
 *
 * @param {string} input - The word to be singularized.
 * @returns {string} The singular form of the word.
 */

export function singularize(input: string) {
  return Singularize.singular(input)
}
