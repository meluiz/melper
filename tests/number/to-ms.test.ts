import { describe, expect, it } from 'vitest'

import { Num } from '../../src'

describe('Num.toMs', () => {
  it('Should be able to convert to pretty milliseconds to milliseconds', () => {
    const string = '1min'
    const expected = 60000
    const toMs = Num.toMs(string)

    expect(toMs).toBe(expected)
  })

  it('Should be able to return milliseconds', () => {
    const number = 60000
    const expected = 60000
    const toMs = Num.toMs(number)

    expect(toMs).toBe(expected)
  })
})
