import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.camelCase', () => {
  it('Should be able to set string as camel case', () => {
    const string = 'hello world'
    const expected = 'helloWorld'
    const camelCase = Str.camelCase(string)

    expect(camelCase).toBe(expected)
  })
})
