import { hasEmptySpace } from './guards'

import {
  ALPHANUMERIC_PATTERN_REGEX,
  MAGIC_SPLIT_REGEX,
  NO_CASE_SPLIT_REGEXP,
  NO_CASE_STRIP_REGEXP,
  SPACE_SPLIT_REGEX,
} from './patterns'

const DEFAULT_OPTIONS = {
  prefix: '',
  keep: [],
  strict: true,
} as const

const getWordSplitRegex = (input: string): RegExp => {
  return hasEmptySpace(input) ? SPACE_SPLIT_REGEX : MAGIC_SPLIT_REGEX
}

const getNormalizedText = (
  input: string,
  form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFC',
): string => {
  return input.trim().normalize(form)
}

const getDisallowedCharacters = (input: string, keep: string[]): string => {
  const normal = getNormalizedText(input, 'NFD')
  return normal.replace(new RegExp(`[^a-zA-ZØßø0-9${keep.join('')}]`, 'g'), '')
}

const getCleanPrefix = (prefix: string, keep: string[] = []): string => {
  const normal = getNormalizedText(prefix)
  return normal.replace(new RegExp(`[^${keep.join('')}]`, 'g'), '')
}

const getFirstLetterIndex = (input: string, regex: RegExp): number => {
  const match = input.matchAll(regex).next().value
  return match?.index ?? 0
}

export interface WordsAndPrefixes {
  parts: string[]
  prefixes: string[]
}

export const getWordsAndPrefixes = (
  input: string,
  regex: RegExp,
): WordsAndPrefixes => {
  const result: WordsAndPrefixes = { parts: [], prefixes: [] }
  const matches = input.matchAll(regex)

  let lastWordEndIndex = 0

  for (const match of matches) {
    if (typeof match.index !== 'number') {
      continue
    }

    const word = match[0]
    result.parts.push(word)

    const prefix = input.slice(lastWordEndIndex, match.index).trim()
    result.prefixes.push(prefix)

    lastWordEndIndex = match.index + word.length
  }

  const tail = input.slice(lastWordEndIndex).trim()

  if (tail) {
    result.parts.push('')
    result.prefixes.push(tail)
  }

  return result
}

export interface NormalizedWordsOptions {
  keep?: string[] | undefined
  prefix?: string | undefined
  strict?: boolean | undefined
}

export const getNormalizedWords = (
  input: string,
  options: NormalizedWordsOptions = {},
): string[] => {
  const { prefix, keep, strict } = Object.assign({}, DEFAULT_OPTIONS, options)

  console.log(Object.assign({}, DEFAULT_OPTIONS, options))

  const normal = getNormalizedText(input)
  const regex = getWordSplitRegex(normal)

  const { parts, prefixes } = getWordsAndPrefixes(normal, regex)

  const hasSpaces = hasEmptySpace(normal)

  const processed = parts.map((part, idx) => {
    const originalPrefix = prefixes[idx] || ''

    let currentPart = part
    let currentPrefix = originalPrefix

    if (strict) {
      const normal = getNormalizedText(currentPart, 'NFD')
      currentPart = getDisallowedCharacters(normal, keep)

      if (!keep.length) {
        currentPrefix = ''
      }
    }

    if (keep.length && currentPrefix) {
      currentPrefix = getCleanPrefix(currentPrefix, keep)
    }

    if (idx === 0) {
      return `${currentPrefix}${currentPart}`
    }

    if (!hasSpaces) {
      return `${currentPrefix || prefix}${currentPart}`
    }

    if (!currentPrefix && prefix.match(/\s/)) {
      return ` ${currentPart}`
    }

    return `${currentPrefix || prefix}${currentPart}`
  })

  return processed.filter(Boolean)
}

export const getCapitalizedWord = (
  input: string,
  regex = MAGIC_SPLIT_REGEX,
): string => {
  const firstLetterIndex = getFirstLetterIndex(input, regex)

  const firstChar = input.charAt(firstLetterIndex).toUpperCase()
  const restOfWord = input.slice(firstLetterIndex + 1).toLowerCase()

  return `${firstChar}${restOfWord}`
}

type NoCaseStringTransform = (
  part: string,
  index: number,
  parts: string[],
) => string

export const getNoCaseString = (
  input: string,
  transform: NoCaseStringTransform = (input) => input.toLowerCase(),
): string => {
  const DELIMITER = '\0'

  const applyDelimiters = (input: string): string => {
    const result = NO_CASE_SPLIT_REGEXP.reduce(
      (previous, current) => previous.replace(current, `$1${DELIMITER}$2`),
      input,
    )

    return result.replace(NO_CASE_STRIP_REGEXP, DELIMITER)
  }

  const trimDelimiters = (str: string): string => {
    let start = 0
    let end = str.length

    while (str.charAt(start) === DELIMITER) start++
    while (str.charAt(end - 1) === DELIMITER) end--

    return str.slice(start, end)
  }

  const delimited = applyDelimiters(input)
  const trimmed = trimDelimiters(delimited)

  return trimmed.split(DELIMITER).map(transform).join(' ')
}

export const getCapitalizedToken = (input: string): string => {
  return input.replace(ALPHANUMERIC_PATTERN_REGEX, (char) => char.toUpperCase())
}
