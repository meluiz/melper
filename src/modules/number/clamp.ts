import type { Limits } from './types'

/**
 * Clamp the given value within the inclusive min and max bounds.
 *
 * @param value - The number to be clamped.
 * @param limits - Object containing the 'min' and/or 'max' limits.
 *
 * @returns The clamped value based on the provided limits.
 * @throws {Error} If both limits are defined and 'min' is greater than 'max'.
 *
 * @signature
 *    number.clamp(value, { min, max });
 * @example
 *    clamp(10, { min: 20 }) // => 20
 *    clamp(10, { max: 5 }) // => 5
 *    clamp(10, { max: 20, min: 5 }) // => 10
 * @category Number
 */

export const clamp = (value: number, limits: Limits): number => {
  const { min, max } = limits

  if (min == null && max == null) {
    return value
  }

  if (min != null && max != null) {
    if (min > max) {
      throw new Error('Minimum value cannot be greater than maximum value.')
    }

    return Math.min(Math.max(value, min), max)
  }

  if (min != null) {
    return Math.max(value, min)
  }

  if (max != null) {
    return Math.min(value, max)
  }

  return value
}
