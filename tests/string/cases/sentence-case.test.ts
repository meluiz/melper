import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.sentenceCase', () => {
  it('Should be able to generate a sentenceCase string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'Hello world'
    const sentenceCase = Str.sentenceCase(string)

    expect(sentenceCase).toBe(expected)
  })
})
