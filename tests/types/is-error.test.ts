import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isError', () => {
  it('Should be able to check if array is an error', () => {
    const array = [1, 'hello world', false]
    const isError = Typ.isError(array)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if boolean is not an error', () => {
    const boolean = true
    const isError = Typ.isError(boolean)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if buffer is not an error', () => {
    const buffer = Buffer.from('hello world')
    const isError = Typ.isError(buffer)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if class is not an error', () => {
    const classValue = class ClassValue {}
    const isError = Typ.isError(classValue)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if date is not an error', () => {
    const date = new Date()
    const isError = Typ.isError(date)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if error is not an error', () => {
    const error = new Error()
    const isError = Typ.isError(error)

    expect(isError).toBeTruthy()
  })

  it('Should be able to check if float is not an error', () => {
    const float = 3.1415
    const isError = Typ.isError(float)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if function is not an error', () => {
    const functionValue = function functionValue() {}
    const isError = Typ.isError(functionValue)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if integer is not an error', () => {
    const integer = 13
    const isError = Typ.isError(integer)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if null is not an error', () => {
    const nullValue = null
    const isError = Typ.isError(nullValue)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if number is not an error', () => {
    const number = 1235813
    const isError = Typ.isError(number)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if object is not an error', () => {
    const object = {}
    const isError = Typ.isError(object)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if regexp is not an error', () => {
    const regexp = new RegExp('hello world')
    const isError = Typ.isError(regexp)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if string is not an error', () => {
    const string = 'hello world'
    const isError = Typ.isError(string)

    expect(isError).toBeFalsy()
  })

  it('Should be able to check if undefined is not an error', () => {
    const undefinedValue = undefined
    const isError = Typ.isError(undefinedValue)

    expect(isError).toBeFalsy()
  })
})
