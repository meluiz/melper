import { noCase as changeNoCase } from 'change-case'

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} input - the function body to generate a comment for
 * @param {unknown} options - additional options for generating the comment
 * @return {unknown} - the generated function comment
 */
export function noCase(input: string) {
  return changeNoCase(input)
}
