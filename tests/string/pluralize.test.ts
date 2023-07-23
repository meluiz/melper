import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.pluralize', () => {
  it('Should be able to pluralize words', () => {
    const string = 'hello world'
    const expected = 'hello worlds'
    const pluralize = Str.pluralize(string)

    expect(pluralize).toBe(expected)
  })

  it('Should be able to pluralize pronoun', () => {
    const string = 'i'
    const expected = 'we'
    const pluralize = Str.pluralize(string)

    expect(pluralize).toBe(expected)
  })
})
