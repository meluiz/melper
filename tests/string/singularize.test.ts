import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.singularize', () => {
  it('Should be able to singularize words', () => {
    const text = 'hello worlds'
    const expected = 'hello world'
    const singularize = Str.singularize(text)

    expect(singularize).toBe(expected)
  })

  it('Should be able to singularize pronoun', () => {
    const text = 'we'
    const expected = 'i'
    const singularize = Str.singularize(text)

    expect(singularize).toBe(expected)
  })
})
