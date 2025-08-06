/**
 * Matches "small words" typically excluded from title casing (e.g., "and", "or", "the").
 */
export const SMALL_WORDS_REGEX =
  /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i

/**
 * Matches double line breaks or paragraphs in plain text.
 */
export const DOUBLE_LINE_BREAK_REGEX = /((.+)(\r?\n\r?\n|$))/gi
