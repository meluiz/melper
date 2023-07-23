import { describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.isBuffer', () => {
  it('Should be able to check if array is a buffer', () => {
    const array = [1, 'hello world', false]
    const isBuffer = Typ.isBuffer(array)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if boolean is not a buffer', () => {
    const boolean = true
    const isBuffer = Typ.isBuffer(boolean)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if buffer is not a buffer', () => {
    const buffer = Buffer.from('hello world')
    const isBuffer = Typ.isBuffer(buffer)

    expect(isBuffer).toBeTruthy()
  })

  it('Should be able to check if class is not a buffer', () => {
    const classValue = class ClassValue {}
    const isBuffer = Typ.isBuffer(classValue)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if date is not a buffer', () => {
    const date = new Date()
    const isBuffer = Typ.isBuffer(date)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if error is not a buffer', () => {
    const error = new Error()
    const isBuffer = Typ.isBuffer(error)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if float is not a buffer', () => {
    const float = 3.1415
    const isBuffer = Typ.isBuffer(float)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if function is not a buffer', () => {
    const functionValue = function functionValue() {}
    const isBuffer = Typ.isBuffer(functionValue)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if integer is not a buffer', () => {
    const integer = 13
    const isBuffer = Typ.isBuffer(integer)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if null is not a buffer', () => {
    const nullValue = null
    const isBuffer = Typ.isBuffer(nullValue)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if number is not a buffer', () => {
    const number = 1235813
    const isBuffer = Typ.isBuffer(number)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if object is not a buffer', () => {
    const object = {}
    const isBuffer = Typ.isBuffer(object)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if regexp is not a buffer', () => {
    const regexp = new RegExp('hello world')
    const isBuffer = Typ.isBuffer(regexp)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if string is not a buffer', () => {
    const string = 'hello world'
    const isBuffer = Typ.isBuffer(string)

    expect(isBuffer).toBeFalsy()
  })

  it('Should be able to check if undefined is not a buffer', () => {
    const undefinedValue = undefined
    const isBuffer = Typ.isBuffer(undefinedValue)

    expect(isBuffer).toBeFalsy()
  })
})
