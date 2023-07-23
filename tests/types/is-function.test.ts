import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isFunction', () => {
  it('Should be able to check if array is a function', () => {
    const array = [1, 'hello world', false]
    const isFunction = Typ.isFunction(array)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if boolean is not a function', () => {
    const boolean = true
    const isFunction = Typ.isFunction(boolean)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if buffer is not a function', () => {
    const buffer = Buffer.from('hello world')
    const isFunction = Typ.isFunction(buffer)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if class is not a function', () => {
    const classValue = class ClassValue {}
    const isFunction = Typ.isFunction(classValue)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if date is not a function', () => {
    const date = new Date()
    const isFunction = Typ.isFunction(date)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if error is not a function', () => {
    const error = new Error()
    const isFunction = Typ.isFunction(error)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if float is not a function', () => {
    const float = 3.1415
    const isFunction = Typ.isFunction(float)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if function is not a function', () => {
    const functionValue = function functionValue() {}
    const isFunction = Typ.isFunction(functionValue)

    expect(isFunction).toBeTruthy()
  })

  it('Should be able to check if integer is not a function', () => {
    const integer = 13
    const isFunction = Typ.isFunction(integer)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if null is not a function', () => {
    const nullValue = null
    const isFunction = Typ.isFunction(nullValue)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if number is not a function', () => {
    const number = 1235813
    const isFunction = Typ.isFunction(number)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if object is not a function', () => {
    const object = {}
    const isFunction = Typ.isFunction(object)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if regexp is not a function', () => {
    const regexp = new RegExp('hello world')
    const isFunction = Typ.isFunction(regexp)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if string is not a function', () => {
    const string = 'hello world'
    const isFunction = Typ.isFunction(string)

    expect(isFunction).toBeFalsy()
  })

  it('Should be able to check if undefined is not a function', () => {
    const undefinedValue = undefined
    const isFunction = Typ.isFunction(undefinedValue)

    expect(isFunction).toBeFalsy()
  })
})
