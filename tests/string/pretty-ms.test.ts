import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.prettyMs', () => {
  it('Should be able to set number to pretty milliseconds', () => {
    const string = 60000
    const expected = '1m'
    const prettyMs = Str.prettyMs(string)

    expect(prettyMs).toBe(expected)
  })

  it('Should be able to set number to pretty milliseconds (with long format)', () => {
    const string = 60000
    const expected = '1 minute'
    const prettyMs = Str.prettyMs(string, { long: true })

    expect(prettyMs).toBe(expected)
  })
})
