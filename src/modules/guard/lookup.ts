import { checkClass } from './utils/check-class'
import { getConstructorName } from './utils/get-constructor-name'

export type DefaultType =
  | 'undefined'
  | 'null'
  | 'boolean'
  | 'string'
  | 'number'
  | 'bigint'
  | 'symbol'

export type FunctionType = 'function' | 'generatorfunction'
export type ComplexType = 'array' | 'arguments' | 'date' | 'error' | 'regexp'
export type BufferType = 'buffer'

export type ArrayType =
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

export type SpecialObjectType =
  | 'generatorobject'
  | 'object'
  | 'mapiterator'
  | 'setiterator'
  | 'stringiterator'
  | 'arrayiterator'
  | 'error'
  | 'regexp'
  | 'class'

export type ConstructorObjectType =
  | 'symbol'
  | 'promise'
  | 'map'
  | 'weakmap'
  | 'set'
  | 'weakset'
  | 'date'
  | 'arguments'

export type Lookup =
  | DefaultType
  | FunctionType
  | ComplexType
  | BufferType
  | ArrayType
  | SpecialObjectType
  | ConstructorObjectType
  | 'unknown'

/**
 * Determines the type of the provided input value.
 *
 * @param input - The value to inspect.
 * @returns A string literal of type `Lookup` representing the detected type.
 *
 * @signature
 *    guard.lookup(input)
 * @example
 *    lookup(123)          // => "number"
 *    lookup(null)         // => "null"
 *    lookup([])           // => "array"
 *    lookup(function*(){}) // => "generatorfunction"
 *
 * @category Guard
 */
export const lookup = (input: unknown): Lookup => {
  if (input === undefined) {
    return 'undefined'
  }

  if (input === null) {
    return 'null'
  }

  const typeOf = typeof input

  if (['boolean', 'string', 'number', 'symbol', 'bigint'].includes(typeOf)) {
    return typeOf as DefaultType
  }

  if (typeOf === 'function') {
    if (checkClass(input)) {
      return 'class'
    }

    if (getConstructorName(input) === 'GeneratorFunction') {
      return 'generatorfunction'
    }

    return 'function'
  }

  if (Array.isArray(input)) {
    return 'array'
  }

  if (
    typeof Buffer !== 'undefined' &&
    Buffer.isBuffer &&
    Buffer.isBuffer(input)
  ) {
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
  const complexTypeMap: Record<string, Lookup> = {
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
    typeOf === 'object' &&
    'next' in (input as any) &&
    'throw' in (input as any) &&
    'return' in (input as any)
  ) {
    return 'generatorobject'
  }

  const nonPlainObjectType = Object.prototype.toString.call(input)
  const objectTypeMap: Record<string, Lookup> = {
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
