import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.capitalCase', () => {
  it('Should be able to generate a capitalCase string from the given input string. (0)', () => {
    const string = 'hello world'
    const expected = 'Hello World'
    const capitalCase = Str.capitalCase(string)

    expect(capitalCase).toBe(expected)
  })

  it('Should be able to generate a capitalCase string from the given input string. (1)', () => {
    const string = 'helloWorld'
    const expected = 'Hello World'
    const capitalCase = Str.capitalCase(string)

    expect(capitalCase).toBe(expected)
  })
})
