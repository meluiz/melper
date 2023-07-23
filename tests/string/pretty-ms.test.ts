import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.prettyMs', () => {
  it('Should be able to set number to pretty milliseconds', () => {
    const text = 60000
    const expected = '1m'
    const prettyMs = Str.prettyMs(text)

    expect(prettyMs).toBe(expected)
  })

  it('Should be able to set number to pretty milliseconds (with long format)', () => {
    const text = 60000
    const expected = '1 minute'
    const prettyMs = Str.prettyMs(text, { long: true })

    expect(prettyMs).toBe(expected)
  })
})
