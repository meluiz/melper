import { describe, expect, it } from 'bun:test'
import { Extrapolate, number } from '../src'

describe('number', () => {
  describe('clamp', () => {
    it('should returns the original value when it is within the specified range', () => {
      expect(number.clamp(10, { min: 0, max: 20 })).toBe(10)
    })

    it('should returns the maximum value when the input exceeds the upper bound', () => {
      expect(number.clamp(25, { min: 0, max: 20 })).toBe(20)
    })

    it('should returns the minimum value when the input is below the lower bound', () => {
      expect(number.clamp(-5, { min: 0, max: 20 })).toBe(0)
    })

    it('should applies only the minimum bound when the maximum is not defined', () => {
      expect(number.clamp(5, { min: 10 })).toBe(10)
    })

    it('should applies only the maximum bound when the minimum is not defined', () => {
      expect(number.clamp(5, { max: 3 })).toBe(3)
    })

    it('should throws an error when the minimum bound is greater than the maximum bound', () => {
      expect(() => number.clamp(5, { min: 10, max: 3 })).toThrow(Error)
    })
  })

  describe('interpolate', () => {
    it('should calculates a proportional value when the input is within the defined range', () => {
      expect(number.interpolate(5, { input: [0, 10], output: [0, 100] })).toBe(
        50,
      )
    })

    it('should clamps the result to the minimum or maximum output when the input is outside the range', () => {
      expect(
        number.interpolate(
          -5,
          { input: [0, 10], output: [0, 100] },
          Extrapolate.Clamp,
        ),
      ).toBe(0)
    })

    it('should returns the input value unchanged when using identity extrapolation', () => {
      expect(
        number.interpolate(
          15,
          { input: [0, 10], output: [0, 100] },
          Extrapolate.Identity,
        ),
      ).toBe(15)
    })

    it('should extends the output range proportionally when using extend extrapolation', () => {
      expect(
        number.interpolate(
          -5,
          { input: [0, 10], output: [0, 100] },
          Extrapolate.Extend,
        ),
      ).toBe(-50)
    })

    it('should throws a RangeError when the input or output ranges are invalid', () => {
      expect(() => number.interpolate(5, { input: [0], output: [0] })).toThrow(
        RangeError,
      )

      expect(() =>
        number.interpolate(5, { input: [0, 10], output: [0] }),
      ).toThrow(RangeError)
    })
  })
})
