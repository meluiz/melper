import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isDate', () => {
  it('Should be able to check if array is a date', () => {
    const array = [1, 'hello world', false]
    const isDate = Typ.isDate(array)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if boolean is not a date', () => {
    const boolean = true
    const isDate = Typ.isDate(boolean)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if buffer is not a date', () => {
    const buffer = Buffer.from('hello world')
    const isDate = Typ.isDate(buffer)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if class is not a date', () => {
    const classValue = class ClassValue {}
    const isDate = Typ.isDate(classValue)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if date is not a date', () => {
    const date = new Date()
    const isDate = Typ.isDate(date)

    expect(isDate).toBeTruthy()
  })

  it('Should be able to check if error is not a date', () => {
    const error = new Error()
    const isDate = Typ.isDate(error)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if float is not a date', () => {
    const float = 3.1415
    const isDate = Typ.isDate(float)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if function is not a date', () => {
    const functionValue = function functionValue() {}
    const isDate = Typ.isDate(functionValue)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if integer is not a date', () => {
    const integer = 13
    const isDate = Typ.isDate(integer)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if null is not a date', () => {
    const nullValue = null
    const isDate = Typ.isDate(nullValue)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if number is not a date', () => {
    const number = 1235813
    const isDate = Typ.isDate(number)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if object is not a date', () => {
    const object = {}
    const isDate = Typ.isDate(object)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if regexp is not a date', () => {
    const regexp = new RegExp('hello world')
    const isDate = Typ.isDate(regexp)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if string is not a date', () => {
    const string = 'hello world'
    const isDate = Typ.isDate(string)

    expect(isDate).toBeFalsy()
  })

  it('Should be able to check if undefined is not a date', () => {
    const undefinedValue = undefined
    const isDate = Typ.isDate(undefinedValue)

    expect(isDate).toBeFalsy()
  })
})
