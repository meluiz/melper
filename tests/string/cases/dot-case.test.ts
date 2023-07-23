import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.dotCase', () => {
  it('Should be able to generate a dotCase string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'hello.world'
    const dotCase = Str.dotCase(string)

    expect(dotCase).toBe(expected)
  })
})
