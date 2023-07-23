import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.truncate', () => {
  it('Should be able to truncate a string', () => {
    const text = 'hello world'
    const expected = 'hell...'
    const truncate = Str.truncate(text, 4)

    expect(truncate).toBe(expected)
  })

  it('Should be able to truncate a string by words', () => {
    const text = 'hello world'
    const expected = 'hello...'
    const truncate = Str.truncate(text, 1, { completeWords: true })

    expect(truncate).toBe(expected)
  })

  it('Should be able to truncate with different suffix', () => {
    const text = 'hello world'
    const expected = 'hell (Read More)'
    const truncate = Str.truncate(text, 4, { suffix: ' (Read More)' })

    expect(truncate).toBe(expected)
  })
})
