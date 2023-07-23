import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isString', () => {
  it('Should be able to check if array is a string', () => {
    const array = [1, 'hello world', false]
    const isString = Typ.isString(array)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if boolean is not a string', () => {
    const boolean = true
    const isString = Typ.isString(boolean)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if buffer is not a string', () => {
    const buffer = Buffer.from('hello world')
    const isString = Typ.isString(buffer)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if class is not a string', () => {
    const classValue = class ClassValue {}
    const isString = Typ.isString(classValue)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if date is not a string', () => {
    const date = new Date()
    const isString = Typ.isString(date)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if error is not a string', () => {
    const error = new Error()
    const isString = Typ.isString(error)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if float is not a string', () => {
    const float = 3.1415
    const isString = Typ.isString(float)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if function is not a string', () => {
    const functionValue = function functionValue() {}
    const isString = Typ.isString(functionValue)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if integer is not a string', () => {
    const integer = 13
    const isString = Typ.isString(integer)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if null is not a string', () => {
    const nullValue = null
    const isString = Typ.isString(nullValue)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if number is not a string', () => {
    const number = 1235813
    const isString = Typ.isString(number)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if object is not a string', () => {
    const object = {}
    const isString = Typ.isString(object)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if regexp is not a string', () => {
    const regexp = new RegExp('hello world')
    const isString = Typ.isString(regexp)

    expect(isString).toBeFalsy()
  })

  it('Should be able to check if string is not a string', () => {
    const string = 'hello world'
    const isString = Typ.isString(string)

    expect(isString).toBeTruthy()
  })

  it('Should be able to check if undefined is not a string', () => {
    const undefinedValue = undefined
    const isString = Typ.isString(undefinedValue)

    expect(isString).toBeFalsy()
  })
})
