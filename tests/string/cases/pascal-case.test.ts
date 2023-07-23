import { describe, expect, it } from 'vitest'

import { Str } from '../../../src'

describe('Str.pascalCase', () => {
  it('Should be able to generate a pascalCase string from the given input string.', () => {
    const string = 'hello world'
    const expected = 'HelloWorld'
    const pascalCase = Str.pascalCase(string)

    expect(pascalCase).toBe(expected)
  })
})
