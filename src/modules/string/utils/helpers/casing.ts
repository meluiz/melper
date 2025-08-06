import { NO_CASE_SPLIT_REGEXP, NO_CASE_STRIP_REGEXP } from '../regexes'

type NoCaseStringTransform = (
  part: string,
  index: number,
  parts: string[],
) => string

/**
 * Converts a camel/Pascal/other-case `input` into a space-separated string.
 */
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
