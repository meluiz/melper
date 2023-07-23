import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isBoolean', () => {
  it('Should be able to check if array is a boolean', () => {
    const array = [1, 'hello world', false]
    const isBoolean = Typ.isBoolean(array)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if boolean is not a boolean', () => {
    const boolean = true
    const isBoolean = Typ.isBoolean(boolean)

    expect(isBoolean).toBeTruthy()
  })

  it('Should be able to check if buffer is not a boolean', () => {
    const buffer = Buffer.from('hello world')
    const isBoolean = Typ.isBoolean(buffer)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if class is not a boolean', () => {
    const classValue = class ClassValue {}
    const isBoolean = Typ.isBoolean(classValue)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if date is not a boolean', () => {
    const date = new Date()
    const isBoolean = Typ.isBoolean(date)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if error is not a boolean', () => {
    const error = new Error()
    const isBoolean = Typ.isBoolean(error)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if float is not a boolean', () => {
    const float = 3.1415
    const isBoolean = Typ.isBoolean(float)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if function is not a boolean', () => {
    const functionValue = function functionValue() {}
    const isBoolean = Typ.isBoolean(functionValue)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if integer is not a boolean', () => {
    const integer = 13
    const isBoolean = Typ.isBoolean(integer)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if null is not a boolean', () => {
    const nullValue = null
    const isBoolean = Typ.isBoolean(nullValue)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if number is not a boolean', () => {
    const number = 1235813
    const isBoolean = Typ.isBoolean(number)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if object is not a boolean', () => {
    const object = {}
    const isBoolean = Typ.isBoolean(object)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if regexp is not a boolean', () => {
    const regexp = new RegExp('hello world')
    const isBoolean = Typ.isBoolean(regexp)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if string is not a boolean', () => {
    const string = 'hello world'
    const isBoolean = Typ.isBoolean(string)

    expect(isBoolean).toBeFalsy()
  })

  it('Should be able to check if undefined is not a boolean', () => {
    const undefinedValue = undefined
    const isBoolean = Typ.isBoolean(undefinedValue)

    expect(isBoolean).toBeFalsy()
  })
})
