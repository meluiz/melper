import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.titleCase', () => {
  it('Should be able to generate a titleCase string from the given input string. (0)', () => {
    const string = 'hello World'
    const expected = 'Hello World'
    const titleCase = Str.titleCase(string)

    expect(titleCase).toBe(expected)
  })

  it('Should be able to generate a titleCase string from the given input string. (1)', () => {
    const string = 'Here is a fox'
    const expected = 'Here Is a Fox'
    const titleCase = Str.titleCase(string)

    expect(titleCase).toBe(expected)
  })
})
