import {
  IS_MANUAL_CASE_REGEX,
  SMALL_WORDS_REGEX,
  WHITESPACE_REGEX,
} from '../regexes'

/**
 * Determines if the given string contains at least one space character.
 */
export const hasEmptySpace = (input: string): boolean => {
  return input.includes(' ')
}

/**
 * Decides whether a token should be capitalized when title-casing a string.
 */
export const shouldCapitalize = (
  token: string,
  index: number,
  input: string,
): boolean => {
  const endIndex = index + token.length

  const isFirstIndex = index === 0
  const isIndexInputLength = endIndex === input.length

  const isSpecialColon = input.charAt(endIndex) === ':'
  const isWhitespace = WHITESPACE_REGEX.test(input.charAt(endIndex + 1))

  const isNotManual = !IS_MANUAL_CASE_REGEX.test(token)
  const isNotSmallWords = !SMALL_WORDS_REGEX.test(token)

  const isNotSmallOrEdge = isNotSmallWords || isFirstIndex || isIndexInputLength
  const isNotSpecialColon = !isSpecialColon || isWhitespace

  return isNotManual && isNotSmallOrEdge && isNotSpecialColon
}
