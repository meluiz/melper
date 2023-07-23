import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.isBoolean', () => {
  it('Should be encode symbols and html entities', () => {
    const string = '<p>hello world ©</p>'
    const expected = '&#x3C;p&#x3E;hello world &#xA9;&#x3C;/p&#x3E;'
    const encode = Str.encodeSymbols(string)

    expect(encode).toBe(expected)
  })
})
