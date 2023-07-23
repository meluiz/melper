import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.capitalize', () => {
  it('Should be able to capitalize a string', () => {
    const text = 'hello world'
    const expected = 'Hello world'
    const capitalize = Str.capitalize(text)

    expect(capitalize).toBe(expected)
  })
})
