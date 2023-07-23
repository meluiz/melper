import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.upper', () => {
  it('Should be able to set a upercase string.', () => {
    const string = 'hello world'
    const expected = 'HELLO WORLD'
    const upper = Str.upper(string)

    expect(upper).toBe(expected)
  })
})
