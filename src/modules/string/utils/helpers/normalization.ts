import { hasEmptySpace } from '../guards'
import { DEFAULT_OPTIONS } from './constants'

import { getWordSplitRegex, getWordsAndPrefixes } from './splitting'
import { throwInvalidInput } from './validation'

/**
 * Trims and normalizes a string to the given Unicode form.
 */
const getNormalizedText = (
  input: string,
  form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD' = 'NFC',
): string => {
  return input.trim().normalize(form)
}

/**
 * Removes all characters except ASCII letters, digits, and those in `keep`.
 * Performs NFD normalization before stripping.
 */
const getDisallowedCharacters = (input: string, keep: string[]): string => {
  const normal = getNormalizedText(input, 'NFD')
  return normal.replace(new RegExp(`[^a-zA-ZØßø0-9${keep.join('')}]`, 'g'), '')
}

/**
 * Cleans a prefix string by removing any character not in `keep`.
 */
const getCleanPrefix = (prefix: string, keep: string[] = []): string => {
  const normal = getNormalizedText(prefix)
  return normal.replace(new RegExp(`[^${keep.join('')}]`, 'g'), '')
}

interface NormalizedWordsOptions {
  keep?: string[] | undefined
  prefix?: string | undefined
  strict?: boolean | undefined
}

/**
 * Splits `input` into normalized words according to `options`.
 */
export const getNormalizedWords = (
  input: string,
  options: NormalizedWordsOptions = {},
): string[] => {
  const { prefix, keep, strict } = Object.assign(
    DEFAULT_OPTIONS.NORMALIZED_WORDS,
    options,
  )

  throwInvalidInput()

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
