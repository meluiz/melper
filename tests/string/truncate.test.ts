import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.truncate', () => {
  it('Should be able to truncate a string', () => {
    const string = 'hello world'
    const expected = 'hell...'
    const truncate = Str.truncate(string, 4)

    expect(truncate).toBe(expected)
  })

  it('Should be able to truncate a string by words', () => {
    const string = 'hello world'
    const expected = 'hello...'
    const truncate = Str.truncate(string, 1, { completeWords: true })

    expect(truncate).toBe(expected)
  })

  it('Should be able to truncate with different suffix', () => {
    const string = 'hello world'
    const expected = 'hell (Read More)'
    const truncate = Str.truncate(string, 4, { suffix: ' (Read More)' })

    expect(truncate).toBe(expected)
  })
})
