/**
 * Matches sequences of non-whitespace characters for simple splitting.
 */
export const SPACE_SPLIT_REGEX = /\S+/g

/**
 * Comprehensive pattern to split text into words, numbers, and uppercase sequences,
 * including support for accented Latin and Cyrillic characters.
 */
export const MAGIC_SPLIT_REGEX =
  /^[a-zà-öø-ÿа-я]+|[A-ZÀ-ÖØ-ßА-Я][a-zà-öø-ÿа-я]+|[a-zà-öø-ÿа-я]+|[0-9]+|[A-ZÀ-ÖØ-ßА-Я]+(?![a-zà-öø-ÿа-я])/g

/**
 * Matches tokens (words or punctuation) including colons and dashes.
 */
export const TOKENS_REGEX = /[^\s:–—-]+|./g

/**
 * Matches any whitespace character.
 */
export const WHITESPACE_REGEX = /\s/
