import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.snakeCase', () => {
  it('Should be able to generate a snakeCase string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'hello_world'
    const snakeCase = Str.snakeCase(string)

    expect(snakeCase).toBe(expected)
  })
})
