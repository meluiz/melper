import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.capitalize', () => {
  it('Should be able to capitalize a string', () => {
    const string = 'hello world'
    const expected = 'Hello world'
    const capitalize = Str.capitalize(string)

    expect(capitalize).toBe(expected)
  })
})
