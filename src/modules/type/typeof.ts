// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import checkClass from './utils/check-class'
import getConstructorName from './utils/get-constructor-name'

export type DefaultTypeof = 'undefined' | 'null' | 'boolean' | 'string' | 'number' | 'bigint' | 'symbol'

export type FunctionTypeof = 'function' | 'generatorfunction'
export type ComplexTypeof = 'array' | 'arguments' | 'date' | 'error' | 'regexp'
export type BufferTypeof = 'buffer'

export type ArrayTypeof =
  | 'array'
  | 'int8array'
  | 'uint8array'
  | 'uint8clampedarray'
  | 'int16array'
  | 'uint16array'
  | 'int32array'
  | 'uint32array'
  | 'float32array'
  | 'float64array'
export type SpecialObjectTypeof =
  | 'generatorobject'
  | 'object'
  | 'mapiterator'
  | 'setiterator'
  | 'stringiterator'
  | 'arrayiterator'
  | 'error'
  | 'regexp'
  | 'class'

export type ConstructorObjectTypeof =
  | 'symbol'
  | 'promise'
  | 'map'
  | 'weakmap'
  | 'set'
  | 'weakset'
  | 'date'
  | 'arguments'

export type Typeof =
  | DefaultTypeof
  | FunctionTypeof
  | ComplexTypeof
  | BufferTypeof
  | ArrayTypeof
  | SpecialObjectTypeof
  | ConstructorObjectTypeof
  | 'unknown'

export type TypeofHandler = (input: unknown) => Typeof

export const typof: TypeofHandler = (input) => {
  if (input === undefined) {
    return 'undefined'
  }

  if (input === null) {
    return 'null'
  }
  const inputTyp = typeof input

  if (['boolean', 'string', 'number', 'symbol', 'bigint'].includes(inputTyp)) {
    return inputTyp
  }

  if (inputTyp === 'function') {
    if (checkClass(input)) {
      return 'class'
    }

    return getConstructorName(input) === 'GeneratorFunction' ? 'generatorfunction' : 'function'
  }

  if (input instanceof Array) {
    return 'array'
  }

  if (input instanceof Buffer) {
    return 'buffer'
  }

  if (input instanceof Date) {
    return 'date'
  }

  if (input instanceof Error) {
    return 'error'
  }

  if (input instanceof RegExp) {
    return 'regexp'
  }

  if (Object.prototype.toString.call(input) === '[object Arguments]') {
    return 'arguments'
  }

  const constructorName = getConstructorName(input)
  const complexTypeMap: Record<string, Typeof> = {
    Symbol: 'symbol',
    Promise: 'promise',
    WeakMap: 'weakmap',
    WeakSet: 'weakset',
    Map: 'map',
    Set: 'set',
    Int8Array: 'int8array',
    Uint8Array: 'uint8array',
    Uint8ClampedArray: 'uint8clampedarray',
    Int16Array: 'int16array',
    Uint16Array: 'uint16array',
    Int32Array: 'int32array',
    Uint32Array: 'uint32array',
    Float32Array: 'float32array',
    Float64Array: 'float64array',
  }

  if (constructorName && complexTypeMap[constructorName]) {
    return complexTypeMap[constructorName]
  }

  if (
    inputTyp === 'object' &&
    'next' in (input as any) &&
    'throw' in (input as any) &&
    'return' in (input as any)
  ) {
    return 'generatorobject'
  }

  const nonPlainObjectType = Object.prototype.toString.call(input)
  const objectTypeMap: Record<string, Typeof> = {
    '[object Object]': 'object',
    '[object Map Iterator]': 'mapiterator',
    '[object Set Iterator]': 'setiterator',
    '[object String Iterator]': 'stringiterator',
    '[object Array Iterator]': 'arrayiterator',
  }

  if (objectTypeMap[nonPlainObjectType]) {
    return objectTypeMap[nonPlainObjectType]
  }

  return 'unknown'
}
