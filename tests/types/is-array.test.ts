import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isArray', () => {
  it('Should be able to check if array is an array', () => {
    const array = [1, 'hello world', false]
    const isArray = Typ.isArray(array)

    expect(isArray).toBeTruthy()
  })

  it('Should be able to check if boolean is not an array', () => {
    const boolean = true
    const isArray = Typ.isArray(boolean)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if buffer is not an array', () => {
    const buffer = Buffer.from('hello world')
    const isArray = Typ.isArray(buffer)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if class is not an array', () => {
    const classValue = class ClassValue {}
    const isArray = Typ.isArray(classValue)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if date is not an array', () => {
    const date = new Date()
    const isArray = Typ.isArray(date)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if error is not an array', () => {
    const error = new Error()
    const isArray = Typ.isArray(error)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if float is not an array', () => {
    const float = 3.1415
    const isArray = Typ.isArray(float)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if function is not an array', () => {
    const functionValue = function functionValue() {}
    const isArray = Typ.isArray(functionValue)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if integer is not an array', () => {
    const integer = 13
    const isArray = Typ.isArray(integer)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if null is not an array', () => {
    const nullValue = null
    const isArray = Typ.isArray(nullValue)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if number is not an array', () => {
    const number = 1235813
    const isArray = Typ.isArray(number)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if object is not an array', () => {
    const object = {}
    const isArray = Typ.isArray(object)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if regexp is not an array', () => {
    const regexp = new RegExp('hello world')
    const isArray = Typ.isArray(regexp)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if string is not an array', () => {
    const string = 'hello world'
    const isArray = Typ.isArray(string)

    expect(isArray).toBeFalsy()
  })

  it('Should be able to check if undefined is not an array', () => {
    const undefinedValue = undefined
    const isArray = Typ.isArray(undefinedValue)

    expect(isArray).toBeFalsy()
  })
})
