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

  input = input.trim()

  let result = ''
  let next = ''

  const state = {
    isTagOpen: false,
    isEndOfWord: false,
  }

  const current = {
    tag: '',
    state: State.Tag,
  }

  const counter = {
    word: 0,
    paragraph: 0,
    character: 0,
  }

  const stack = {
    tags: [],
  } as {
    tags: string[]
  }

  if (sentence === '' || (tags && sentence.length <= length)) {
    return sentence
  }

  if (!tags) {
    sentence = sentence.replace(HTML_LINE_BREAK_REGEX, ' ')

    if (!/(paragraph(s)?)/.test(type)) {
      sentence = sentence
        .replace(HTML_COMMENT_REGEX, '')
        .replace(HTML_TAG_REGEX, '')
    }

    if (/\r?\n\r?\n/.test(sentence)) {
      sentence = sentence.replace(DOUBLE_LINE_BREAK_REGEX, '<p>$2</p>')
    }
  }

  sentence = sentence.replace(HTML_NEWLINE_PARAGRAPHS_REGEX, '</p><p>')

  let index = 0
  while (index < sentence.length) {
    const char = sentence.charAt(index)

    switch (char) {
      case '<': {
        if (current.state === State.Text) {
          current.state = State.Tag
          current.tag = ''
        }

        if (!tags) {
          result += char
        }
        break
      }
      case '>': {
        if (current.state === State.Tag || current.state === State.Attributes) {
          current.state = State.Text
          current.tag = current.tag.toLowerCase()

          if (current.tag === '/p') {
            counter.paragraph += 1

            if (!tags) {
              result += ' '
            }
          }

          if (
            SELF_CLOSING_TAGS.indexOf(current.tag) !== -1 &&
            SELF_CLOSING_TAGS.indexOf(`${current.tag}/`) === -1
          ) {
            if (current.tag.indexOf('/') >= 0) {
              stack.tags.pop()
            } else {
              stack.tags.push(current.tag)
            }
          }
        }

        if (!tags) {
          result += char
        }
        break
      }
      case ' ': {
        if (current.state === State.Tag) {
          current.state = State.Attributes
        }

        if (current.state === State.Text) {
          counter.word += 1
          counter.character += 1
        }

        if (current.state === State.Text || tags) {
          result += char
        }
        break
      }
      default: {
        if (current.state === State.Text) {
          counter.character += 1
        }

        if (current.state === State.Tag) {
          current.tag += char
        }

        if (current.state === State.Text || tags) {
          result += char
        }
        break
      }
    }

    next = sentence[index + 1] ?? ''
    state.isEndOfWord = strict
      ? true
      : !char.match(/[a-zA-ZÇ-Ü']/i) || !next.match(/[a-zA-ZÇ-Ü']/i)

    if (/word(s)?/i.test(type) && length <= counter.word) {
      result = result.replace(/\s+$/, '')
      break
    }

    if (
      /character(s)?/i.test(type) &&
      length <= counter.character &&
      state.isEndOfWord
    ) {
      break
    }

    if (/paragraph(s)?/i.test(type) && length === counter.paragraph) {
      break
    }

    index++
  }

  if (tags && stack.tags.length > 0) {
    while (stack.tags.length > 0) {
      const tag = stack.tags.pop()

      if (tag !== '!--') {
        result += `</${tag}>`
      }
    }
  }

  if (index < sentence.length - 1) {
    if (result.match(/<\/p>$/gi)) {
      result = result.replace(/(<\/p>)$/gi, `${ellipsis}$1`)
    } else {
      result = `${result}${ellipsis}`
    }
  }

  return result.trim()
}
