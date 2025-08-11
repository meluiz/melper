import { hasEmptySpace } from '../guards'
import {
  DOUBLE_LINE_BREAK_REGEX,
  HTML_COMMENT_REGEX,
  HTML_LINE_BREAK_REGEX,
  HTML_NEWLINE_PARAGRAPHS_REGEX,
  HTML_TAG_REGEX,
  MAGIC_SPLIT_REGEX,
  SPACE_SPLIT_REGEX,
} from '../regexes'
import { HTML_TAG_NAME_REGEX } from '../regexes/html'
import { DEFAULT_OPTIONS, SELF_CLOSING_TAGS } from './constants'
import { throwInvalidInput } from './validation'

/**
 * Chooses the appropriate regex for splitting into words:
 * - If there is any space, split on whitespace.
 * - Otherwise, use the "magic" pattern.
 */
export const getWordSplitRegex = (input: string): RegExp => {
  return hasEmptySpace(input) ? SPACE_SPLIT_REGEX : MAGIC_SPLIT_REGEX
}

interface WordsAndPrefixes {
  parts: string[]
  prefixes: string[]
}

/**
 * Splits `input` by `regex`, capturing each match and the text before it.
 */
export const getWordsAndPrefixes = (
  input: string,
  regex: RegExp,
): WordsAndPrefixes => {
  const result: WordsAndPrefixes = { parts: [], prefixes: [] }
  const matches = input.matchAll(regex)

  let lastWordEndIndex = 0

  for (const match of matches) {
    if (typeof match.index !== 'number') {
      continue
    }

    const word = match[0]
    result.parts.push(word)

    const prefix = input.slice(lastWordEndIndex, match.index).trim()
    result.prefixes.push(prefix)

    lastWordEndIndex = match.index + word.length
  }

  const tail = input.slice(lastWordEndIndex).trim()

  if (tail) {
    result.parts.push('')
    result.prefixes.push(tail)
  }

  return result
}

/**
 * Finds the index of the first match of `regex` in `input`.
 */
export const getFirstLetterIndex = (input: string, regex: RegExp): number => {
  const match = input.matchAll(regex).next().value
  return match?.index ?? 0
}

interface TruncatedStringOptions {
  type?: 'words' | 'paragraphs' | 'characters'
  tags?: boolean
  strict?: boolean
  ellipsis?: string
}

interface Stack {
  tags: string[]
}

enum State {
  Text = 0,
  Tag = 1,
  Attributes = 2,
}

/**
 * Truncates a string (plain or HTML) by words, paragraphs, or characters.
 */
export const getTruncatedString = (
  input: string,
  length: number,
  options?: TruncatedStringOptions,
) => {
  throwInvalidInput(input)

  const { type, tags, strict, ellipsis } = Object.assign(
    DEFAULT_OPTIONS.TRUNCATED_STRING,
    options,
  )

  let sentence = input.trim()
  let result = ''

  const current = {
    tag: '',
    state: State.Text,
  }

  const counter = {
    word: 0,
    paragraph: 0,
    character: 0,
  }

  const stack: Stack = {
    tags: [],
  }

  let isTruncated = false

  if (!tags) {
    sentence = sentence.replace(HTML_COMMENT_REGEX, '')
    sentence = sentence.replace(HTML_TAG_REGEX, '')
  }

  let index = 0
  while (index < sentence.length) {
    const char = sentence.charAt(index)

    const isStateTag = current.state === State.Tag
    const isStateText = current.state === State.Text
    const isStateAttributes = current.state === State.Attributes

    switch (char) {
      case '<': {
        if (tags) {
          current.state = State.Tag
          current.tag = ''

          result += char
        }
        break
      }
      case '>': {
        if (tags) {
          if (isStateTag || isStateAttributes) {
            current.state = State.Text

            const raw = current.tag
            const closing = raw.startsWith('/')
            const name = raw.replace(/^\//, '').toLowerCase()

            if (!SELF_CLOSING_TAGS.includes(name) && !closing) {
              stack.tags.push(name)
            } else if (closing) {
              stack.tags.pop()
            }
          }

          result += char
        }
        break
      }
      case ' ': {
        if (isStateText) {
          if (/word(s)?/i.test(type)) {
            counter.word++

            if (counter.word >= length) {
              if (!strict) {
                result = result.trimEnd()
              }

              isTruncated = true
              index = sentence.length

              break
            }
          }
          counter.character++
          if (/character(s)?/i.test(type) && counter.character >= length) {
            isTruncated = true
            index = sentence.length
            break
          }
        }

        result += char
        break
      }
      default: {
        if (isStateText) {
          counter.character++

          if (/character(s)?/i.test(type) && counter.character >= length) {
            isTruncated = true
            index = sentence.length
            result += char
            break
          }
        } else if (tags && current.state === State.Tag) {
          if (char === ' ') {
            current.state = State.Attributes
          } else {
            current.tag += char
          }
        }

        result += char
        break
      }
    }

    if (isStateText && /paragraph(s)?/i.test(type) && char === '\n') {
      counter.paragraph++

      if (counter.paragraph >= length) {
        isTruncated = true
        index = sentence.length

        break
      }
    }

    index++
  }

  if (tags && stack.tags.length > 0) {
    while (stack.tags.length > 0) {
      const tag = stack.tags.pop()

      if (tag) {
        result += `</${tag}>`
      }
    }
  }

  if (isTruncated) {
    if (tags && HTML_TAG_NAME_REGEX.test(result)) {
      result = result.replace(HTML_TAG_NAME_REGEX, `${ellipsis}</$1>`)
    } else {
      result += ellipsis
    }
  }

  return result.trim()
}
