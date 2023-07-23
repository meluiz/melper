import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isRegExp', () => {
  it('Should be able to check if array is a regexp', () => {
    const array = [1, 'hello world', false]
    const isRegExp = Typ.isRegExp(array)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if boolean is not a regexp', () => {
    const boolean = true
    const isRegExp = Typ.isRegExp(boolean)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if buffer is not a regexp', () => {
    const buffer = Buffer.from('hello world')
    const isRegExp = Typ.isRegExp(buffer)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if class is not a regexp', () => {
    const classValue = class ClassValue {}
    const isRegExp = Typ.isRegExp(classValue)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if date is not a regexp', () => {
    const date = new Date()
    const isRegExp = Typ.isRegExp(date)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if error is not a regexp', () => {
    const error = new Error()
    const isRegExp = Typ.isRegExp(error)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if float is not a regexp', () => {
    const float = 3.1415
    const isRegExp = Typ.isRegExp(float)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if function is not a regexp', () => {
    const functionValue = function functionValue() {}
    const isRegExp = Typ.isRegExp(functionValue)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if integer is not a regexp', () => {
    const integer = 13
    const isRegExp = Typ.isRegExp(integer)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if null is not a regexp', () => {
    const nullValue = null
    const isRegExp = Typ.isRegExp(nullValue)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if number is not a regexp', () => {
    const number = 1235813
    const isRegExp = Typ.isRegExp(number)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if object is not a regexp', () => {
    const object = {}
    const isRegExp = Typ.isRegExp(object)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if regexp is not a regexp', () => {
    const regexp = new RegExp('hello world')
    const isRegExp = Typ.isRegExp(regexp)

    expect(isRegExp).toBeTruthy()
  })

  it('Should be able to check if string is not a regexp', () => {
    const string = 'hello world'
    const isRegExp = Typ.isRegExp(string)

    expect(isRegExp).toBeFalsy()
  })

  it('Should be able to check if undefined is not a regexp', () => {
    const undefinedValue = undefined
    const isRegExp = Typ.isRegExp(undefinedValue)

    expect(isRegExp).toBeFalsy()
  })
})
