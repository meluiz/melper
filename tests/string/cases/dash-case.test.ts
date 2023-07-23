import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.dashCase', () => {
  it('Should be able to generate a dash-case string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'hello-world'
    const dashCase = Str.dashCase(string)

    expect(dashCase).toBe(expected)
  })
})
