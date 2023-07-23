import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.prettyBytes', () => {
  it('Should be able to set number to pretty bytes', () => {
    const string = 1024
    const expected = '1KB'
    const prettyBytes = Str.prettyBytes(string)

    expect(prettyBytes).toBe(expected)
  })

  it('Should be able to set number to pretty bytes (with unit separator)', () => {
    const string = 1024
    const expected = '1 KB'
    const prettyBytes = Str.prettyBytes(string, { unitSeparator: ' ' })

    expect(prettyBytes).toBe(expected)
  })
})
