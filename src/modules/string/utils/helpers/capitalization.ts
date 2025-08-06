import { ALPHANUMERIC_PATTERN_REGEX, MAGIC_SPLIT_REGEX } from '../regexes'
import { getFirstLetterIndex } from './splitting'

/**
 * Capitalizes the first real letter of a word and lowercases the rest.
 */
export const getCapitalizedWord = (
  input: string,
  regex = MAGIC_SPLIT_REGEX,
): string => {
  const firstLetterIndex = getFirstLetterIndex(input, regex)

  const firstChar = input.charAt(firstLetterIndex).toUpperCase()
  const restOfWord = input.slice(firstLetterIndex + 1).toLowerCase()

  return `${firstChar}${restOfWord}`
}

/**
 * Uppercases the first alphanumeric character in the string.
 */
export const getCapitalizedToken = (input: string): string => {
  return input.replace(ALPHANUMERIC_PATTERN_REGEX, (char) => char.toUpperCase())
}
