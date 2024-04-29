// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { describe, expect, it } from 'vitest'
import { type } from '../../src'

import checkClass from '#modules/type/utils/check-class'
import getConstructorName from '#modules/type/utils/get-constructor-name'

describe('Typeof - Utility Functions', () => {
  const constructorNameCases = [
    { type: null, expected: null },
    { type: 42, expected: null },
    { type: 'string', expected: null },
    { type: undefined, expected: null },
    { type: true, expected: null },
    { type: Object.create(null), expected: null },
    { type: { constructor: null }, expected: null },
  ]

  for (const { type, expected } of constructorNameCases) {
    it(`Should return "${expected}" if the input is ${typeof type}`, () => {
      expect(getConstructorName(type)).toBe(expected)
    })
  }

  it("Should return 'true' if the input is a class", () => {
    expect(checkClass(class Test {})).toBe(true)
  })

  it("Should return 'false' if the input is not a class", () => {
    expect(checkClass(() => {})).toBe(false)
  })
})

describe('Typeof - Basic and Instance Type Checks', () => {
  const basicCases = [
    { type: undefined, expected: 'undefined' },
    { type: null, expected: 'null' },
    { type: true, expected: 'boolean' },
    { type: false, expected: 'boolean' },
    { type: 'string', expected: 'string' },
    { type: 1, expected: 'number' },
    { type: 1n, expected: 'bigint' },
    { type: [], expected: 'array' },
    { type: {}, expected: 'object' },
    { type: Buffer.alloc(0), expected: 'buffer' },
    { type: class Test {}, expected: 'class' },
    { type: () => {}, expected: 'function' },
    { type: function* () {}, expected: 'generatorfunction' },
    { type: /test/, expected: 'regexp' },
    { type: new RegExp(/test/), expected: 'regexp' },
    { type: new Error(), expected: 'error' },
    { type: new Date(), expected: 'date' },
  ]

  for (const { type: typ, expected } of basicCases) {
    it(`Should return "${expected}" if input is a ${expected}`, () => {
      const isBasic = type.lookup(typ)
      // @ts-ignore
      expect(isBasic).toBe(expected)
    })
  }

  it('Should return "arguments" if input is an "arguments" object', function () {
    const isArgument = type.lookup(arguments)
    expect(isArgument).toBe('arguments')
  })

  it('Should return "generatorobject" for generator-like objects', () => {
    const generatorLikeObject = {
      next: () => {},
      throw: () => {},
      return: () => {},
    }

    const result = type.lookup(generatorLikeObject)
    expect(result).toBe('generatorobject')
  })

  it('Should return "unknown" if input is an unrecognized object', () => {
    const originalToString = Object.prototype.toString
    Object.prototype.toString = () => '[object Unrecognized]'

    expect(type.lookup({})).toBe('unknown')

    Object.prototype.toString = originalToString
  })
})

describe('Typeof - Complex Type Mapping', () => {
  const complexCases = [
    { type: Symbol(), expected: 'symbol' },
    { type: Promise.resolve(), expected: 'promise' },
    { type: new WeakMap(), expected: 'weakmap' },
    { type: new WeakSet(), expected: 'weakset' },
    { type: new Map(), expected: 'map' },
    { type: new Set(), expected: 'set' },
    { type: new Int8Array(), expected: 'int8array' },
    { type: new Uint8Array(), expected: 'uint8array' },
    { type: new Uint8ClampedArray(), expected: 'uint8clampedarray' },
    { type: new Int16Array(), expected: 'int16array' },
    { type: new Uint16Array(), expected: 'uint16array' },
    { type: new Int32Array(), expected: 'int32array' },
    { type: new Uint32Array(), expected: 'uint32array' },
    { type: new Float32Array(), expected: 'float32array' },
    { type: new Float64Array(), expected: 'float64array' },
  ]

  for (const { type: typ, expected } of complexCases) {
    it(`Should return "${expected}" if input is a ${expected}`, () => {
      const isComplex = type.lookup(typ)
      // @ts-ignore
      expect(isComplex).toBe(expected)
    })
  }
})

describe('Typeof - Non-Plain Object Type Mapping', () => {
  const nonPlainObjectType = [
    { type: {}, expected: 'object' },
    { type: new Map().keys(), expected: 'mapiterator' },
    { type: new Set().values(), expected: 'setiterator' },
    { type: 'test'[Symbol.iterator](), expected: 'stringiterator' },
    { type: [][Symbol.iterator](), expected: 'arrayiterator' },
  ]

  for (const { type: typ, expected } of nonPlainObjectType) {
    it(`Should return "${expected}" if input is a ${expected}`, () => {
      const isComplex = type.lookup(typ)
      // @ts-ignore
      expect(isComplex).toBe(expected)
    })
  }
})
