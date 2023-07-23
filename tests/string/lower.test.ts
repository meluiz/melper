import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.lower', () => {
  it('Should be able to set a lowercase string.', () => {
    const text = 'HELLO WORLD'
    const expected = 'hello world'
    const lower = Str.lower(text)

    expect(lower).toBe(expected)
  })
})
