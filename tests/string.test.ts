import { describe, expect, it } from 'bun:test'
import { string } from '../src'

describe('string', () => {
  describe('capitalize', () => {
    it('should capitalizes the first letter of a non-empty string', () => {
      expect(string.capitalize('hello')).toBe('Hello')
      expect(string.capitalize('')).toBe('')
    })

    it('should returns an empty string unchanged', () => {
      expect(string.capitalize('')).toBe('')
    })

    it('throws an error when the input is not a string', () => {
      // @ts-expect-error: Expected a string but got null
      expect(() => string.capitalize(null)).toThrow(Error)
    })
  })

  describe('casing', () => {
    const cases = [
      {
        name: 'toCamelCase',
        description: 'should converts space-separated words to camelCase',
        callback: string.toCamelCase,
        input: 'hello world',
        output: 'helloWorld',
      },
      {
        name: 'toPascalCase',
        description: 'should converts space-separated words to PascalCase',
        callback: string.toPascalCase,
        input: 'hello world',
        output: 'HelloWorld',
      },
      {
        name: 'toKebabCase',
        description: 'should converts space-separated words to kebab-case',
        callback: string.toKebabCase,
        input: 'hello world',
        output: 'hello-world',
      },
      {
        name: 'toSnakeCase',
        description: 'should converts space-separated words to snake_case',
        callback: string.toSnakeCase,
        input: 'hello world',
        output: 'hello_world',
      },
      {
        name: 'toSpaceCase',
        description: 'should replaces hyphens with spaces',
        callback: string.toSpaceCase,
        input: 'hello-world',
        output: 'hello world',
      },
      {
        name: 'toDotNotationCase',
        description: 'should replaces spaces with dots',
        callback: string.toDotNotationCase,
        input: 'hello world',
        output: 'hello.world',
      },
      {
        name: 'toConstantCase',
        description: 'should converts to CONSTANT_CASE',
        callback: string.toConstantCase,
        input: 'hello world',
        output: 'HELLO_WORLD',
      },
      {
        name: 'toTrainCase',
        description: 'should converts to TrainCase (PascalCase without spaces)',
        callback: string.toTrainCase,
        input: 'hello world',
        output: 'HelloWorld',
      },
      {
        name: 'toAdaCase',
        description: 'should converts to AdaCase (PascalCase without spaces)',
        callback: string.toAdaCase,
        input: 'hello world',
        output: 'HelloWorld',
      },
      {
        name: 'toCobolCase',
        description: 'should converts to COBOL-CASE (uppercase with hyphens)',
        callback: string.toCobolCase,
        input: 'hello world',
        output: 'HELLO-WORLD',
      },
      {
        name: 'toPathCase',
        description:
          'should converts to a path-like format with "/-" separators',
        callback: string.toPathCase,
        input: 'folder name file',
        output: 'folder/-name/-file',
      },
      {
        name: 'toCapitalCase',
        description: 'should capitalizes each word without spaces',
        callback: string.toCapitalCase,
        input: 'hello world',
        output: 'HelloWorld',
      },
      {
        name: 'toLowerCaseCase',
        description: 'should converts all characters to lowercase',
        callback: string.toLowerCaseCase,
        input: 'Hello World',
        output: 'hello world',
      },
      {
        name: 'toUpperCase',
        description: 'should converts all characters to uppercase',
        callback: string.toUpperCase,
        input: 'Hello World',
        output: 'HELLO WORLD',
      },
      {
        name: 'toTitleCase',
        description: 'should capitalizes the first letter of each major word',
        callback: string.toTitleCase,
        input: 'an example of title case',
        output: 'An Example of Title Case',
      },
      {
        name: 'toSentenceCase',
        description:
          'should converts to sentence case with only the first letter capitalized',
        callback: string.toSentenceCase,
        input: 'HELLO WORLD. this is a test.',
        output: 'Hello world this is a test',
      },
      {
        name: 'toNoCase',
        description:
          'should removes separators and converts to lowercase words separated by spaces',
        callback: string.toNoCase,
        input: 'Hello-World_Test',
        output: 'hello world test',
      },
    ] as const

    for (const data of cases) {
      it(`"${data.input}" → ${data.name} → "${data.output}" (${data.description})`, () => {
        expect(data.callback(data.input)).toBe(data.output)
      })
    }
  })

  describe('duration', () => {
    it('format and parse milliseconds', () => {
      expect(string.fromMilliseconds(3600000)).toBe('1h')
      expect(string.fromMilliseconds(3600000, true)).toBe('1 hour')
      expect(string.toMilliseconds('1h')).toBe(3600000)
      expect(string.toMilliseconds(500)).toBe(500)
      expect(() => string.toMilliseconds('abc')).toThrow(TypeError)
    })

    it('format and parse seconds', () => {
      expect(string.fromSeconds(60)).toBe('1m')
      expect(string.fromSeconds(60, true)).toBe('1 minute')
      expect(string.toSeconds('2h')).toBe(7200)
      expect(string.toSeconds(30)).toBe(30)
      expect(() => string.toSeconds('abc')).toThrow(TypeError)
    })
  })

  describe('excerpt', () => {
    it('should truncate text and append ellipsis when length is exceeded', () => {
      expect(string.excerpt('Lorem ipsum dolor sit amet', 11)).toBe(
        'Lorem ipsum...',
      )
    })

    it('should return original text when within limit', () => {
      expect(string.excerpt('Short text', 20)).toBe('Short text')
    })

    it('should limit by words when words option is enabled', () => {
      expect(
        string.excerpt('This is a simple test sentence', 3, { words: true }),
      ).toBe('This is a...')
    })

    it('throws an error when the input is not a string', () => {
      // @ts-expect-error: Expected a string but got null
      expect(() => string.excerpt(null, 10)).toThrow(Error)
    })
  })

  describe('interpolate', () => {
    it('should replace placeholders with corresponding values', () => {
      expect(
        string.interpolate('hello {{ user.name }}', { user: { name: 'John' } }),
      ).toBe('hello John')
    })

    it('should keep escaped placeholders intact', () => {
      expect(
        string.interpolate(
          'This is an escaped placeholder: \\{{ users.0 }}',
          {},
        ),
      ).toBe('This is an escaped placeholder: {{ users.0 }}')
    })

    it('should replace missing keys with undefined', () => {
      expect(string.interpolate('missing {{ foo }}', {})).toBe(
        'missing undefined',
      )
    })

    it('throws an error when the input is not a string', () => {
      // @ts-expect-error: Expected a string but got null
      expect(() => string.interpolate(null, {})).toThrow(Error)
    })
  })

  describe('random', () => {
    it('should generate a string of the requested length using allowed characters', () => {
      const random = Math.random
      Math.random = () => 0
      expect(string.random(5)).toBe('aaaaa')
      Math.random = random
    })

    it('should return an empty string when length is zero or negative', () => {
      expect(string.random(0)).toBe('')
      expect(string.random(-3)).toBe('')
    })
  })

  describe('sentence', () => {
    it('should format array into a human readable sentence', () => {
      expect(string.sentence(['apple', 'banana', 'cherry'])).toBe(
        'apple, banana, and cherry',
      )
    })

    it('should use pair separator when exactly two items', () => {
      expect(
        string.sentence(['apple', 'banana'], { pairSeparator: ' & ' }),
      ).toBe('apple & banana')
    })

    it('should return empty string for empty array', () => {
      expect(string.sentence([])).toBe('')
    })
  })

  describe('slug', () => {
    it('should slugify text using default options', () => {
      expect(string.slug('Hello, World!')).toBe('hello-world!')
    })

    it('should respect custom separator and casing options', () => {
      expect(
        string.slug('Hello, World!', { lower: false, separator: '_' }),
      ).toBe('Hello_World!')
    })

    it('should remove unsupported characters in strict mode', () => {
      expect(string.slug('foo@bar', { strict: true })).toBe('foobar')
    })

    it('should create a new slug function with custom defaults', () => {
      const custom = string.slug.create({ lower: false })
      expect(custom('Hello World')).toBe('Hello-World')
    })

    it('throws an error when the input is not a string', () => {
      // @ts-expect-error: Expected a string but got null
      expect(() => string.slug(null)).toThrow(Error)
    })

    it('should extend the character mapping', () => {
      const custom = string.slug.create()
      custom.extend({ '@': 'at' })
      expect(custom('email@host')).toBe('emailathost')
    })
  })

  describe('truncate', () => {
    it('should truncate text to the specified length and append ellipsis', () => {
      expect(string.truncate('Hello World', 5)).toBe('Hello...')
    })

    it('throws an error when the input is not a string', () => {
      // @ts-expect-error: Expected a string but got null
      expect(() => string.truncate(null, 5)).toThrow(Error)
    })
  })
})
