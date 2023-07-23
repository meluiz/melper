import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.upper', () => {
  it('Should be able to set a upercase string.', () => {
    const text = 'hello world'
    const expected = 'HELLO WORLD'
    const upper = Str.upper(text)

    expect(upper).toBe(expected)
  })
})
