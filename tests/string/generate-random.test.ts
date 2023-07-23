import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.generateRandom', () => {
  it('Should be able to generate a random string of given length', () => {
    const length = 32
    const random = Str.generateRandom(length)

    expect(random).toHaveLength(length)
  })
})
