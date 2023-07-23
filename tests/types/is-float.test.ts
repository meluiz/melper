import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isFloat', () => {
  it('Should be able to check values for float (0)', () => {
    const string = '22.10'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (1)', () => {
    const number = 22.1
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (2)', () => {
    const string = '-22.10'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (3)', () => {
    const number = -22.1
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (4)', () => {
    const string = '.3'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (5)', () => {
    const number = 0.3
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (6)', () => {
    const string = '-.3'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (7)', () => {
    const number = -0.3
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeTruthy()
  })

  it('Should be able to check values for float (8)', () => {
    const string = '-22.00'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeFalsy()
  })

  it('Should be able to check values for float (9)', () => {
    const number = -22.0
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeFalsy()
  })

  it('Should be able to check values for float (10)', () => {
    const string = '22'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeFalsy()
  })

  it('Should be able to check values for float (11)', () => {
    const number = 22
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeFalsy()
  })

  it('Should be able to check values for float (12)', () => {
    const string = '-22'
    const isFloat = Typ.isFloat(parseFloat(string))

    expect(isFloat).toBeFalsy()
  })

  it('Should be able to check values for float (13)', () => {
    const number = -22
    const isFloat = Typ.isFloat(number)

    expect(isFloat).toBeFalsy()
  })
})
