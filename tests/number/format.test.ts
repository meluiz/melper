import { describe, expect, it } from 'vitest'

import { Num } from '../../src'

describe('Num.format', () => {
  it('Should be able to format a number to currency in Germany (Euro)', () => {
    const number = 123456.789
    const expected = '123.456,79\u00A0€'
    const formatted = Num.format(number, 'de-DE', { style: 'currency', currency: 'EUR' })

    expect(formatted).toBe(expected)
  })

  it('Should be able to format a number to currency in Brazil (BRL)', () => {
    const number = 123456.789
    const expected = 'R$\u00A0123.456,79'
    const formatted = Num.format(number, 'pt-BR', { style: 'currency', currency: 'BRL' })

    expect(formatted).toBe(expected)
  })

  it('Should be able to format a number', () => {
    const number = 123456.789
    const expected = '1,23,456.789'
    const formatted = Num.format(number, 'en-IN')

    expect(formatted).toBe(expected)
  })
})
