import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isNull', () => {
  it('Should be able to check if array is null', () => {
    const array = [1, 'hello world', false]
    const isNull = Typ.isNull(array)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if boolean is not null', () => {
    const boolean = true
    const isNull = Typ.isNull(boolean)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if buffer is not null', () => {
    const buffer = Buffer.from('hello world')
    const isNull = Typ.isNull(buffer)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if class is not null', () => {
    const classValue = class ClassValue {}
    const isNull = Typ.isNull(classValue)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if date is not null', () => {
    const date = new Date()
    const isNull = Typ.isNull(date)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if error is not null', () => {
    const error = new Error()
    const isNull = Typ.isNull(error)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if float is not null', () => {
    const float = 3.1415
    const isNull = Typ.isNull(float)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if function is not null', () => {
    const functionValue = function functionValue() {}
    const isNull = Typ.isNull(functionValue)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if integer is not null', () => {
    const integer = 13
    const isNull = Typ.isNull(integer)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if null is not null', () => {
    const nullValue = null
    const isNull = Typ.isNull(nullValue)

    expect(isNull).toBeTruthy()
  })

  it('Should be able to check if number is not null', () => {
    const number = 1235813
    const isNull = Typ.isNull(number)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if object is not null', () => {
    const object = {}
    const isNull = Typ.isNull(object)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if regexp is not null', () => {
    const regexp = new RegExp('hello world')
    const isNull = Typ.isNull(regexp)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if string is not null', () => {
    const string = 'hello world'
    const isNull = Typ.isNull(string)

    expect(isNull).toBeFalsy()
  })

  it('Should be able to check if undefined is not null', () => {
    const undefinedValue = undefined
    const isNull = Typ.isNull(undefinedValue)

    expect(isNull).toBeFalsy()
  })
})
