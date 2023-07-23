import { describe, expect, it } from 'vitest'

import { Str } from '../../src'

describe('Str.escapeHTML', () => {
  it('Should be able to escape html', () => {
    const string = '<p>hello world</p>'
    const expected = '&lt;p&gt;hello world&lt;/p&gt;'
    const escape = Str.escapeHTML(string)

    expect(escape).toBe(expected)
  })
})
