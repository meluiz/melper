import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isInteger', () => {
  it('Should be able to check values for integer (0)', () => {
    const string = '22.10'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (1)', () => {
    const number = 22.1
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (2)', () => {
    const string = '-22.10'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (3)', () => {
    const number = -22.1
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (4)', () => {
    const string = '.3'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (5)', () => {
    const number = 0.3
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (6)', () => {
    const string = '-.3'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (7)', () => {
    const number = -0.3
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeFalsy()
  })

  it('Should be able to check values for integer (8)', () => {
    const string = '-22.00'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeTruthy()
  })

  it('Should be able to check values for integer (9)', () => {
    const number = -22.0
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeTruthy()
  })

  it('Should be able to check values for integer (10)', () => {
    const string = '22'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeTruthy()
  })

  it('Should be able to check values for integer (11)', () => {
    const number = 22
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeTruthy()
  })

  it('Should be able to check values for integer (12)', () => {
    const string = '-22'
    const isInteger = Typ.isInteger(parseFloat(string))

    expect(isInteger).toBeTruthy()
  })

  it('Should be able to check values for integer (13)', () => {
    const number = -22
    const isInteger = Typ.isInteger(number)

    expect(isInteger).toBeTruthy()
  })
})
