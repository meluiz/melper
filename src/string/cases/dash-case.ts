import { headerCase, paramCase } from 'change-case'

interface Options {
  capitalize?: boolean
}

/**
 * Generates a dash-case string from the given input string.
 *
 * @param {string} input - The input string to convert to dash-case.
 * @param {Options} options - (Optional) Additional options for the conversion.
 * @param {boolean} options.capitalize - (Optional) If true, capitalizes the converted string.
 * @return {string} - The converted dash-case string.
 */
export function dashCase(input: string, options?: Options) {
  if (options && options.capitalize) {
    return headerCase(input)
  }

  return paramCase(input)
}
