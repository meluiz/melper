import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isUndefined', () => {
  it('Should be able to check if array is undefined', () => {
    const array = [1, 'hello world', false]
    const isUndefined = Typ.isUndefined(array)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if boolean is not undefined', () => {
    const boolean = true
    const isUndefined = Typ.isUndefined(boolean)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if buffer is not undefined', () => {
    const buffer = Buffer.from('hello world')
    const isUndefined = Typ.isUndefined(buffer)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if class is not undefined', () => {
    const classValue = class ClassValue {}
    const isUndefined = Typ.isUndefined(classValue)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if date is not undefined', () => {
    const date = new Date()
    const isUndefined = Typ.isUndefined(date)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if error is not undefined', () => {
    const error = new Error()
    const isUndefined = Typ.isUndefined(error)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if float is not undefined', () => {
    const float = 3.1415
    const isUndefined = Typ.isUndefined(float)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if function is not undefined', () => {
    const functionValue = function functionValue() {}
    const isUndefined = Typ.isUndefined(functionValue)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if integer is not undefined', () => {
    const integer = 13
    const isUndefined = Typ.isUndefined(integer)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if null is not undefined', () => {
    const nullValue = null
    const isUndefined = Typ.isUndefined(nullValue)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if number is not undefined', () => {
    const number = 1235813
    const isUndefined = Typ.isUndefined(number)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if object is not undefined', () => {
    const object = {}
    const isUndefined = Typ.isUndefined(object)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if regexp is not undefined', () => {
    const regexp = new RegExp('hello world')
    const isUndefined = Typ.isUndefined(regexp)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if string is not undefined', () => {
    const string = 'hello world'
    const isUndefined = Typ.isUndefined(string)

    expect(isUndefined).toBeFalsy()
  })

  it('Should be able to check if undefined is not undefined', () => {
    const undefinedValue = undefined
    const isUndefined = Typ.isUndefined(undefinedValue)

    expect(isUndefined).toBeTruthy()
  })
})
