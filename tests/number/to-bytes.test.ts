import { describe, expect, it } from 'vitest'

import { Num } from '../../src'

describe('Num.toBytes', () => {
  it('Should be able to convert pretty bytes to bytes', () => {
    const string = '1KB'
    const expected = 1024
    const toBytes = Num.toBytes(string)

    expect(toBytes).toBe(expected)
  })

  it('Should be able to return bytes', () => {
    const number = 1024
    const expected = 1024
    const toBytes = Num.toBytes(number)

    expect(toBytes).toBe(expected)
  })
})
