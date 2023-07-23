import { TestOptions, describe, expect, it } from 'vitest'

import { Typ } from '../../src'

describe('Typ.typeOf', () => {
  it('Should be able to check if undefined is a undefined', () => {
    const undefinedValue = undefined
    const type = Typ.typeOf(undefinedValue)

    expect(type).toBe('undefined')
  })

  it('Should be able to check if null is a null', () => {
    const nullValue = null
    const type = Typ.typeOf(nullValue)

    expect(type).toBe('null')
  })

  it('Should be able to check if boolean is a boolean', () => {
    const boolean = false
    const type = Typ.typeOf(boolean)

    expect(type).toBe('boolean')
  })

  it('Should be able to check if buffer is a buffer', () => {
    const buffer = Buffer.from('hello world')
    const type = Typ.typeOf(buffer)

    expect(type).toBe('buffer')
  })

  it('Should be able to check if number is a number', () => {
    const number = 1235813
    const type = Typ.typeOf(number)

    expect(type).toBe('number')
  })

  it('Should be able to check if string is a string', () => {
    const string = 'hello world'
    const type = Typ.typeOf(string)

    expect(type).toBe('string')
  })

  it('Should be able to check if arguments is an arguments', () => {
    ;(function () {
      const argumentsValue = arguments
      const type = Typ.typeOf(argumentsValue)

      expect(type).toBe('arguments')
    })()
  })

  it('Should be able to check if object is an object', () => {
    const object = {}
    const type = Typ.typeOf(object)

    expect(type).toBe('object')
  })

  it('Should be able to check if date is a date', () => {
    const date = new Date()
    const type = Typ.typeOf(date)

    expect(type).toBe('date')
  })

  it('Should be able to check if array is an array', () => {
    const array = [1, 'hello world', true]
    const type = Typ.typeOf(array)

    expect(type).toBe('array')
  })

  it('Should be able to check if regexp is a regexp', () => {
    const regexp = new RegExp('hello world')
    const type = Typ.typeOf(regexp)

    expect(type).toBe('regexp')
  })

  it('Should be able to check if error is an error', () => {
    const error = new Error()
    const type = Typ.typeOf(error)

    expect(type).toBe('error')
  })

  it('Should be able to check if function is a function', () => {
    const functionValue = function functionValue() {}
    const type = Typ.typeOf(functionValue)

    expect(type).toBe('function')
  })

  it('Should be able to check if class is a class', () => {
    const classValue = class ClassValue {}
    const type = Typ.typeOf(classValue)

    expect(type).toBe('class')
  })

  it('Should be able to check if generatorfunction is a generatorfunction', () => {
    const generatorfunction = function* () {}
    const type = Typ.typeOf(generatorfunction)

    expect(type).toBe('generatorfunction')
  })

  it('Should be able to check if symbol is a symbol', () => {
    const symbol = Symbol()
    const type = Typ.typeOf(symbol)

    expect(type).toBe('symbol')
  })

  it('Should be able to check if map is a map', () => {
    const map = new Map()
    const type = Typ.typeOf(map)

    expect(type).toBe('map')
  })

  it('Should be able to check if weakmap is a weakmap', () => {
    const weakmap = new WeakMap()
    const type = Typ.typeOf(weakmap)

    expect(type).toBe('weakmap')
  })

  it('Should be able to check if set is a set', () => {
    const set = new Set()
    const type = Typ.typeOf(set)

    expect(type).toBe('set')
  })

  it('Should be able to check if weakset is an weakset', () => {
    const weakset = new WeakSet()
    const type = Typ.typeOf(weakset)

    expect(type).toBe('weakset')
  })

  it('Should be able to check if int8array is a int8array', () => {
    const int8array = new Int8Array()
    const type = Typ.typeOf(int8array)

    expect(type).toBe('int8array')
  })

  it('Should be able to check if uint8array is a uint8array', () => {
    const uint8array = new Uint8Array()
    const type = Typ.typeOf(uint8array)

    expect(type).toBe('uint8array')
  })

  it('Should be able to check if uint8clampedarray is a uint8clampedarray', () => {
    const uint8clampedarray = new Uint8ClampedArray()
    const type = Typ.typeOf(uint8clampedarray)

    expect(type).toBe('uint8clampedarray')
  })

  it('Should be able to check if int16array is a int16array', () => {
    const int16array = new Int16Array()
    const type = Typ.typeOf(int16array)

    expect(type).toBe('int16array')
  })

  it('Should be able to check if uint16array is a uint16array', () => {
    const uint16array = new Uint16Array()
    const type = Typ.typeOf(uint16array)

    expect(type).toBe('uint16array')
  })

  it('Should be able to check if int32array is a int32array', () => {
    const int32array = new Int32Array()
    const type = Typ.typeOf(int32array)

    expect(type).toBe('int32array')
  })

  it('Should be able to check if uint32array is a uint32array', () => {
    const uint32array = new Uint32Array()
    const type = Typ.typeOf(uint32array)

    expect(type).toBe('uint32array')
  })

  it('Should be able to check if float32array is a float32array', () => {
    const float32array = new Float32Array()
    const type = Typ.typeOf(float32array)

    expect(type).toBe('float32array')
  })

  it('Should be able to check if float64array is a float64array', () => {
    const float64array = new Float64Array()
    const type = Typ.typeOf(float64array)

    expect(type).toBe('float64array')
  })
})
