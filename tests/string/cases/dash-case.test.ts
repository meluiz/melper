import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.dashCase', () => {
  it('Should be able to generate a dash-case string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'hello-world'
    const dashCase = Str.dashCase(string)

    expect(dashCase).toBe(expected)
  })

  it('Should be able to generate a dash-case string with capitalize from the given input string.', () => {
    const string = 'hello world'
    const expected = 'Hello-World'
    const dashCase = Str.dashCase(string, { capitalize: true })

    expect(dashCase).toBe(expected)
  })
})
