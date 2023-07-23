import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isNumber', () => {
  it('Should be able to check if array is a number', () => {
    const array = [1, 'hello world', false]
    const isNumber = Typ.isNumber(array)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if boolean is not a number', () => {
    const boolean = true
    const isNumber = Typ.isNumber(boolean)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if buffer is not a number', () => {
    const buffer = Buffer.from('hello world')
    const isNumber = Typ.isNumber(buffer)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if class is not a number', () => {
    const classValue = class ClassValue {}
    const isNumber = Typ.isNumber(classValue)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if date is not a number', () => {
    const date = new Date()
    const isNumber = Typ.isNumber(date)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if error is not a number', () => {
    const error = new Error()
    const isNumber = Typ.isNumber(error)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if float is not a number', () => {
    const float = 3.1415
    const isNumber = Typ.isNumber(float)

    expect(isNumber).toBeTruthy()
  })

  it('Should be able to check if function is not a number', () => {
    const functionValue = function functionValue() {}
    const isNumber = Typ.isNumber(functionValue)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if integer is not a number', () => {
    const integer = 13
    const isNumber = Typ.isNumber(integer)

    expect(isNumber).toBeTruthy()
  })

  it('Should be able to check if null is not a number', () => {
    const nullValue = null
    const isNumber = Typ.isNumber(nullValue)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if number is not a number', () => {
    const number = 1235813
    const isNumber = Typ.isNumber(number)

    expect(isNumber).toBeTruthy()
  })

  it('Should be able to check if object is not a number', () => {
    const object = {}
    const isNumber = Typ.isNumber(object)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if regexp is not a number', () => {
    const regexp = new RegExp('hello world')
    const isNumber = Typ.isNumber(regexp)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if string is not a number', () => {
    const string = 'hello world'
    const isNumber = Typ.isNumber(string)

    expect(isNumber).toBeFalsy()
  })

  it('Should be able to check if undefined is not a number', () => {
    const undefinedValue = undefined
    const isNumber = Typ.isNumber(undefinedValue)

    expect(isNumber).toBeFalsy()
  })
})
