import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isObject', () => {
  it('Should be able to check if array is an object', () => {
    const array = [1, 'hello world', false]
    const isObject = Typ.isObject(array)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if boolean is not an object', () => {
    const boolean = true
    const isObject = Typ.isObject(boolean)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if buffer is not an object', () => {
    const buffer = Buffer.from('hello world')
    const isObject = Typ.isObject(buffer)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if class is not an object', () => {
    const classValue = class ClassValue {}
    const isObject = Typ.isObject(classValue)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if date is not an object', () => {
    const date = new Date()
    const isObject = Typ.isObject(date)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if error is not an object', () => {
    const error = new Error()
    const isObject = Typ.isObject(error)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if float is not an object', () => {
    const float = 3.1415
    const isObject = Typ.isObject(float)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if function is not an object', () => {
    const functionValue = function functionValue() {}
    const isObject = Typ.isObject(functionValue)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if integer is not an object', () => {
    const integer = 13
    const isObject = Typ.isObject(integer)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if null is not an object', () => {
    const nullValue = null
    const isObject = Typ.isObject(nullValue)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if number is not an object', () => {
    const number = 1235813
    const isObject = Typ.isObject(number)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if object is not an object', () => {
    const object = {}
    const isObject = Typ.isObject(object)

    expect(isObject).toBeTruthy()
  })

  it('Should be able to check if regexp is not an object', () => {
    const regexp = new RegExp('hello world')
    const isObject = Typ.isObject(regexp)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if string is not an object', () => {
    const string = 'hello world'
    const isObject = Typ.isObject(string)

    expect(isObject).toBeFalsy()
  })

  it('Should be able to check if undefined is not an object', () => {
    const undefinedValue = undefined
    const isObject = Typ.isObject(undefinedValue)

    expect(isObject).toBeFalsy()
  })
})
