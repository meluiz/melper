const SMALL_WORDS =
  /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i
const TOKENS = /[^\s:–—-]+|./g
const WHITESPACE = /\s/
const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/
const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/

/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param {string} input - The string to be converted to title case.
 * @return {string} The converted string in title case.
 */
export function titleCase(input: string) {
  let output = ''
  let result: RegExpExecArray | null

  while ((result = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = result

    if (
      !IS_MANUAL_CASE.test(token) &&
      (!SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) &&
      (input.charAt(index + token.length) !== ':' || WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      output += token.replace(ALPHANUMERIC_PATTERN, (char) => char.toUpperCase())
    } else {
      output += token
    }
  }

  return output
}
