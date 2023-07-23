import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isClass', () => {
  it('Should be able to check if array is a class', () => {
    const array = [1, 'hello world', false]
    const isClass = Typ.isClass(array)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if boolean is not a class', () => {
    const boolean = true
    const isClass = Typ.isClass(boolean)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if buffer is not a class', () => {
    const buffer = Buffer.from('hello world')
    const isClass = Typ.isClass(buffer)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if class is not a class', () => {
    const classValue = class ClassValue {}
    const isClass = Typ.isClass(classValue)

    expect(isClass).toBeTruthy()
  })

  it('Should be able to check if date is not a class', () => {
    const date = new Date()
    const isClass = Typ.isClass(date)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if error is not a class', () => {
    const error = new Error()
    const isClass = Typ.isClass(error)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if float is not a class', () => {
    const float = 3.1415
    const isClass = Typ.isClass(float)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if function is not a class', () => {
    const functionValue = function functionValue() {}
    const isClass = Typ.isClass(functionValue)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if integer is not a class', () => {
    const integer = 13
    const isClass = Typ.isClass(integer)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if null is not a class', () => {
    const nullValue = null
    const isClass = Typ.isClass(nullValue)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if number is not a class', () => {
    const number = 1235813
    const isClass = Typ.isClass(number)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if object is not a class', () => {
    const object = {}
    const isClass = Typ.isClass(object)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if regexp is not a class', () => {
    const regexp = new RegExp('hello world')
    const isClass = Typ.isClass(regexp)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if string is not a class', () => {
    const string = 'hello world'
    const isClass = Typ.isClass(string)

    expect(isClass).toBeFalsy()
  })

  it('Should be able to check if undefined is not a class', () => {
    const undefinedValue = undefined
    const isClass = Typ.isClass(undefinedValue)

    expect(isClass).toBeFalsy()
  })
})
