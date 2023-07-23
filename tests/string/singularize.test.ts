import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.singularize', () => {
  it('Should be able to singularize words', () => {
    const string = 'hello worlds'
    const expected = 'hello world'
    const singularize = Str.singularize(string)

    expect(singularize).toBe(expected)
  })

  it('Should be able to singularize pronoun', () => {
    const string = 'we'
    const expected = 'i'
    const singularize = Str.singularize(string)

    expect(singularize).toBe(expected)
  })
})
