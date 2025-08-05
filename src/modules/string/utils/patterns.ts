export const NO_CASE_SPLIT_REGEXP = [
  /([a-z0-9])([A-Z])/g,
  /([A-Z])([A-Z][a-z])/g,
]

export const NO_CASE_STRIP_REGEXP = /[^A-Z0-9]+/gi

export const SPACE_SPLIT_REGEX = /\S+/g

export const MAGIC_SPLIT_REGEX =
  /^[a-zà-öø-ÿа-я]+|[A-ZÀ-ÖØ-ßА-Я][a-zà-öø-ÿа-я]+|[a-zà-öø-ÿа-я]+|[0-9]+|[A-ZÀ-ÖØ-ßА-Я]+(?![a-zà-öø-ÿа-я])/g

export const SMALL_WORDS_REGEX =
  /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i

export const TOKENS_REGEX = /[^\s:–—-]+|./g

export const WHITESPACE_REGEX = /\s/

export const IS_MANUAL_CASE_REGEX = /.(?=[A-Z]|\..)/

export const ALPHANUMERIC_PATTERN_REGEX = /[A-Za-z0-9\u00C0-\u00FF]/
