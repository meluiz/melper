/**
 * Functions is a copy/paste with adapting from `case-anything` and `poppinss/string`.
 *
 * @credits
 * - https://github.com/poppinss/string
 * - https://github.com/mesqueeb/case-anything/
 */

import { shouldCapitalize } from './utils/guards'
import {
  getCapitalizedToken,
  getCapitalizedWord,
  getNoCaseString,
  getNormalizedWords,
} from './utils/helpers'
import { MAGIC_SPLIT_REGEX, TOKENS_REGEX } from './utils/patterns'

export interface CaseOptions {
  /**
   * List of characters or substrings to preserve exactly as‑is during the case conversion.
   * By default, any character not matching the target case pattern may be transformed or removed.
   */
  keep?: string[] | undefined

  /**
   * When `true`, strips out all characters not explicitly listed in `keep` or matched by the target case rules.
   * Defaults to `true`, enforcing strict removal of non‑listed characters.
   */
  strict?: boolean | undefined
}

/**
 * Converts a string to camelCase, joining words and capitalizing all except the first.
 *
 * @param input - The string to convert to camelCase.
 * @param options - Optional settings: `keep` for words to remain unchanged, `strict` for enforcing exact casing.
 * @returns The camelCase version of the input string.
 *
 * @signature
 *    string.toCamelCase("hello world");
 * @example
 *    toCamelCase("hello world");
 *    // => "helloWorld"
 *
 * @category String
 */
export const toCamelCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, options)

  return words.reduce((previous, current, index) => {
    if (!current) {
      return previous
    }

    const isFirstWord = index === 0
    const isAllLowercase = !(current[0] || '').match(MAGIC_SPLIT_REGEX)

    const shouldLowercase = isFirstWord || isAllLowercase

    const normal = shouldLowercase
      ? current.toLowerCase()
      : getCapitalizedWord(current)

    return `${previous}${normal}`
  }, '')
}

/**
 * Converts a string to PascalCase, capitalizing the first letter of each word.
 *
 * @param input - The string to convert to PascalCase.
 * @param options - Optional settings for word handling.
 * @returns The PascalCase version of the input string.
 *
 * @signature
 *    string.toPascalCase("hello world");
 * @example
 *    toPascalCase("hello world");
 *    // => "HelloWorld"
 *
 * @category String
 */
export const toPascalCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, options)

  return words.reduce((previous, current) => {
    return `${previous}${getCapitalizedWord(current)}`
  }, '')
}

/**
 * Converts a string to kebab-case, joining words with hyphens.
 *
 * @param input - The string to convert to kebab-case.
 * @param options - Optional settings for word handling.
 * @returns The kebab-case version of the input string.
 *
 * @signature
 *    string.toKebabCase("hello world");
 * @example
 *    toKebabCase("hello world");
 *    // => "hello-world"
 *
 * @category String
 */
export const toKebabCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '-' })

  return words.join('').toLowerCase()
}

/**
 * Converts a string to snake_case, joining words with underscores.
 *
 * @param input - The string to convert to snake_case.
 * @param options - Optional settings for word handling.
 * @returns The snake_case version of the input string.
 *
 * @signature
 *    string.toSnakeCase("hello world");
 * @example
 *    toSnakeCase("hello world");
 *    // => "hello_world"
 *
 * @category String
 */
export const toSnakeCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '_' })

  return words.join('').toLowerCase()
}

/**
 * Converts a string to space case, joining words with spaces.
 *
 * @param input - The string to convert to space case.
 * @param options - Optional settings for word handling.
 * @returns The space-separated version of the input string.
 *
 * @signature
 *    string.toSpaceCase("hello-world");
 * @example
 *    toSpaceCase("hello-world");
 *    // => "hello world"
 *
 * @category String
 */
export const toSpaceCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: ' ' })

  return words.join('')
}

/**
 * Converts a string to dot.notation.case, joining words with dots.
 *
 * @param input - The string to convert to dot notation.
 * @param options - Optional settings for word handling.
 * @returns The dot.notation version of the input string.
 *
 * @signature
 *    string.toDotNotationCase("hello world");
 * @example
 *    toDotNotationCase("hello world");
 *    // => "hello.world"
 *
 * @category String
 */
export const toDotNotationCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '.' })

  return words.join('')
}

/**
 * Converts a string to CONSTANT_CASE, joining words with underscores and uppercasing all letters.
 *
 * @param input - The string to convert to CONSTANT_CASE.
 * @param options - Optional settings for word handling.
 * @returns The CONSTANT_CASE version of the input string.
 *
 * @signature
 *    string.toConstantCase("hello world");
 * @example
 *    toConstantCase("hello world");
 *    // => "HELLO_WORLD"
 *
 * @category String
 */
export const toConstantCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '_' })

  return words.join('').toUpperCase()
}

/**
 * Converts a string to Train-Case, capitalizing each word and joining with hyphens.
 *
 * @param input - The string to convert to Train-Case.
 * @param options - Optional settings for word handling.
 * @returns The Train-Case version of the input string.
 *
 * @signature
 *    string.toTrainCase("hello world");
 * @example
 *    toTrainCase("hello world");
 *    // => "Hello-World"
 *
 * @category String
 */
export const toTrainCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '-' })

  return words.map((word) => getCapitalizedWord(word)).join('')
}

/**
 * Converts a string to Ada_Case, capitalizing each word and joining with underscores.
 *
 * @param input - The string to convert to Ada_Case.
 * @param options - Optional settings for word handling.
 * @returns The Ada_Case version of the input string.
 *
 * @signature
 *    string.toAdaCase("hello world");
 * @example
 *    toAdaCase("hello world");
 *    // => "Hello_World"
 *
 * @category String
 */
export const toAdaCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '_' })

  return words.map((word) => getCapitalizedWord(word)).join('')
}

/**
 * Converts a string to COBOL-CASE, joining words with hyphens and uppercasing all letters.
 *
 * @param input - The string to convert to COBOL-CASE.
 * @param options - Optional settings for word handling.
 * @returns The COBOL-CASE version of the input string.
 *
 * @signature
 *    string.toCobolCase("hello world");
 * @example
 *    toCobolCase("hello world");
 *    // => "HELLO-WORLD"
 *
 * @category String
 */
export const toCobolCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: '-' })

  return words.join('').toUpperCase()
}

/**
 * Converts a file path or string to path/case, ensuring segments are separated by '/'.
 *
 * @param input - The path or string to convert.
 * @param options - Optional settings for word handling.
 * @returns The path/case version of the input string.
 *
 * @signature
 *    string.toPathCase("hello world");
 * @example
 *    toPathCase("folder name file name");
 *    // => "folder/name/file/name"
 *
 * @category String
 */
export const toPathCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, options)

  return words.reduce((previous, current, index) => {
    const prefix = index === 0 || current[0] === '/' ? '' : '/'
    return `${previous}${prefix}${current}`
  }, '')
}

/**
 * Converts a string to Capital Case, capitalizing each word and joining with spaces.
 *
 * @param input - The string to convert to Capital Case.
 * @param options - Optional settings for word handling.
 * @returns The Capital Case version of the input string.
 *
 * @signature
 *    string.toCapitalCase("hello world");
 * @example
 *    toCapitalCase("hello world");
 *    // => "Hello World"
 *
 * @category String
 */
export const toCapitalCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: ' ' })

  return words.reduce((previous, current) => {
    return `${previous}${getCapitalizedWord(current)}`
  }, '')
}

/**
 * Converts a string to lower_case case, joining words without spaces and lowercasing all letters.
 *
 * @param input - The string to convert to lower_case.
 * @param options - Optional settings for word handling.
 * @returns The lower_case version of the input string.
 *
 * @signature
 *    string.toLowerCaseCase("Hello World");
 * @example
 *    toLowerCaseCase("Hello World");
 *    // => "helloworld"
 *
 * @category String
 */
export const toLowerCaseCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: ' ' })

  return words.join('').toLowerCase()
}

/**
 * Converts a string to upper_case, joining words without spaces and lowercasing all letters (alias for lower_case).
 *
 * @param input - The string to convert.
 * @param options - Optional settings for word handling.
 * @returns The transformed string.
 *
 * @signature
 *    string.toUpperCase("Hello World");
 * @example
 *    toUpperCase("Hello World");
 *    // => "helloworld"
 *
 * @category String
 */
export const toUpperCase = (input: string, options?: CaseOptions) => {
  const words = getNormalizedWords(input, { ...options, prefix: ' ' })

  return words.join('').toLowerCase()
}

/**
 * Converts a string to Title Case, capitalizing main words according to English title capitalization rules.
 *
 * @param input - The string to convert to Title Case.
 * @returns The Title Case version of the input string.
 *
 * @signature
 *    string.toTitleCase("an example of title case");
 * @example
 *    toTitleCase("an example of title case");
 *    // => "An Example of Title Case"
 *
 * @category String
 */
export const toTitleCase = (input: string) => {
  let output = ''
  let result: RegExpExecArray | null

  while ((result = TOKENS_REGEX.exec(input)) !== null) {
    const { 0: token, index } = result

    output += shouldCapitalize(token, index, input)
      ? getCapitalizedToken(token)
      : token
  }

  return output
}

/**
 * Converts a string to Sentence case, capitalizing the first character and lowercasing the rest.
 *
 * @param input - The string to convert to Sentence case.
 * @returns The Sentence case version of the input string.
 *
 * @signature
 *    string.toSentenceCase("HELLO WORLD. this is a test.");
 * @example
 *    toSentenceCase("HELLO WORLD. this is a test.");
 *    // => "Hello world. this is a test."
 *
 * @category String
 */
export const toSentenceCase = (input: string) => {
  return getNoCaseString(input, (input, index) => {
    const lowerCased = input.toLowerCase()

    if (index === 0) {
      const firstChar = lowerCased.charAt(0).toUpperCase()
      const rest = lowerCased.slice(1)

      return `${firstChar}${rest}`
    }

    return lowerCased
  })
}

/**
 * Converts a string to no case, leaving spacing and casing unchanged except for trimming.
 *
 * @param input - The string to convert.
 * @returns The no case (untransformed) version of the input string.
 *
 * @signature
 *    string.toNoCase("Hello-World_Test");
 * @example
 *    toNoCase("Hello-World_Test");
 *    // => "Hello World Test"
 *
 * @category String
 */
export const toNoCase = (input: string) => {
  return getNoCaseString(input)
}
