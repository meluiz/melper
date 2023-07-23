import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.excerpt', () => {
  it('Should be able to truncate a string with html tags', () => {
    const text = 'hello <strong>world</strong>'
    const expected = 'hell...'
    const excerpt = Str.excerpt(text, 4)

    expect(excerpt).toBe(expected)
  })

  it('Should be able to truncate a string with html tags by words', () => {
    const text = 'hello <strong>world</strong>'
    const expected = 'hello...'
    const excerpt = Str.excerpt(text, 1, { completeWords: true })

    expect(excerpt).toBe(expected)
  })

  it('Should be able to truncate a html tags with different suffix', () => {
    const text = 'hello <strong>world</strong>'
    const expected = 'hell <a href="/#">Read more</a>'
    const excerpt = Str.excerpt(text, 4, { suffix: ' <a href="/#">Read more</a>' })

    expect(excerpt).toBe(expected)
  })
})
