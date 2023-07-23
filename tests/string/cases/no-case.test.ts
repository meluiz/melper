import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.noCase', () => {
  it('Should be able to generate a noCase string from the given input string.', () => {
    const string = 'helloWorld'
    const expected = 'hello world'
    const noCase = Str.noCase(string)

    expect(noCase).toBe(expected)
  })
})
