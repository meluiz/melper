/**
 * Patterns to split camelCase and PascalCase boundaries:
 * - between lowercase/number and uppercase
 * - between uppercase sequences and uppercase+lowercase
 */
export const NO_CASE_SPLIT_REGEXP = [
  /([a-z0-9])([A-Z])/g,
  /([A-Z])([A-Z][a-z])/g,
]

/**
 * Pattern to strip all non-uppercase letters and digits.
 * Useful after splitting to remove extra characters.
 */
export const NO_CASE_STRIP_REGEXP = /[^A-Z0-9]+/gi

/**
 * Detects strings that appear to use manual casing (e.g., mixed or inconsistent casing).
 */
export const IS_MANUAL_CASE_REGEX = /.(?=[A-Z]|\..)/

/**
 * Matches any alphanumeric character, including accented Latin characters.
 */
export const ALPHANUMERIC_PATTERN_REGEX = /[A-Za-z0-9\u00C0-\u00FF]/
