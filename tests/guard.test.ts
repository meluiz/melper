import { afterEach, describe, expect, it } from 'bun:test'
import { guard } from '../src'

describe('guard', () => {
  const env = process.env.NODE_ENV

  afterEach(() => {
    process.env.NODE_ENV = env
  })

  describe('is', () => {
    it('should reflects NODE_ENV=development as dev=true and prod=false; NODE_ENV=production as dev=false and prod=true; NODE_ENV=test as dev=true and prod=false', () => {
      const prev = process.env.NODE_ENV

      process.env.NODE_ENV = 'development'
      expect(guard.isDev()).toBe(true)
      expect(guard.isProd()).toBe(false)

      process.env.NODE_ENV = 'production'
      expect(guard.isDev()).toBe(false)
      expect(guard.isProd()).toBe(true)

      process.env.NODE_ENV = 'test'
      expect(guard.isDev()).toBe(true)
      expect(guard.isProd()).toBe(false)

      process.env.NODE_ENV = prev
    })

    it('should correctly identifies booleans, arrays, object-likeness, plain objects, numbers (excluding NaN), strings, callables, and nullish values', () => {
      expect(guard.isBool(true)).toBe(true)
      expect(guard.isBool('true')).toBe(false)

      expect(guard.isArray([1, 2, 3])).toBe(true)
      expect(guard.isArray({})).toBe(false)

      expect(guard.isObjectLike({})).toBe(true)
      expect(guard.isObjectLike(null)).toBe(false)

      expect(guard.isObject({ a: 1 })).toBe(true)
      expect(guard.isObject([1, 2])).toBe(false)

      expect(guard.isNumber(5)).toBe(true)
      expect(guard.isNumber(Number.NaN)).toBe(false)

      expect(guard.isString('hi')).toBe(true)
      expect(guard.isString(5)).toBe(false)

      expect(guard.isCallable(() => {})).toBe(true)
      expect(guard.isCallable(5)).toBe(false)

      expect(guard.isNull(null)).toBe(true)
      expect(guard.isNull(undefined)).toBe(true)
      expect(guard.isNull(0)).toBe(false)
    })

    it('should returns true only for plain object literals and false for non-plain objects', () => {
      expect(guard.isPlainObject({ a: 1 })).toBe(true)
      expect(guard.isPlainObject(new Date())).toBe(false)
      expect(guard.isPlainObject([])).toBe(false)
    })
  })

  describe('hasOwnProp', () => {
    it('should returns true for own properties and false for inherited or absent properties', () => {
      const obj = Object.create({ proto: 1 })
      obj.own = 2

      expect(guard.hasOwnProp(obj, 'own')).toBe(true)

      expect(guard.hasOwnProp(obj, 'proto')).toBe(false)
      expect(guard.hasOwnProp({}, 'toString')).toBe(false)
    })
  })

  describe('lookup', () => {
    it('should returns the correct type label for primitives and objects', () => {
      expect(guard.lookup(1)).toBe('number')
      expect(guard.lookup('hi')).toBe('string')
      expect(guard.lookup(null)).toBe('null')
      expect(guard.lookup(undefined)).toBe('undefined')
      expect(guard.lookup([1, 2])).toBe('array')
      expect(guard.lookup({})).toBe('object')
    })

    it('should returns the correct type label for regular functions, generator functions, and classes', () => {
      function regular() {}
      function* gen() {}
      class MyClass {}

      expect(guard.lookup(regular)).toBe('function')
      expect(guard.lookup(gen)).toBe('generatorfunction')
      expect(guard.lookup(MyClass)).toBe('class')
    })
  })
})
