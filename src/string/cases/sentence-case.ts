import { sentenceCase as changeSentenceCase } from 'change-case'

/**
 * Transforms the input string to sentence case.
 *
 * @param {string} input - The string to be transformed.
 * @return {string} The transformed string in sentence case.
 */
export function sentenceCase(input: string) {
  return changeSentenceCase(input)
}
