import {
  IS_MANUAL_CASE_REGEX,
  SMALL_WORDS_REGEX,
  WHITESPACE_REGEX,
} from './words'

export const hasOwnProp = <T extends object, K extends PropertyKey>(
  data: T,
  key: K,
): data is T & Record<K, unknown> => {
  return Object.prototype.hasOwnProperty.call(data, key)
}

export const hasEmptySpace = (input: string): boolean => {
  return input.includes(' ')
}

export const shouldCapitalize = (
  token: string,
  index: number,
  input: string,
): boolean => {
  const isNotManual = !IS_MANUAL_CASE_REGEX.test(token)
  const isNotSmallOrEdge =
    !SMALL_WORDS_REGEX.test(token) ||
    index === 0 ||
    index + token.length === input.length
  const isNotSpecialColon =
    input.charAt(index + token.length) !== ':' ||
    WHITESPACE_REGEX.test(input.charAt(index + token.length + 1))

  return isNotManual && isNotSmallOrEdge && isNotSpecialColon
}
