import { clamp } from './clamp'
import { Extrapolate, interpolate } from './interpolate'
import { random } from './random'

export type { Limits, Ranges, SafeNumber } from './types'

export { clamp, interpolate, Extrapolate, random }
export default {
  clamp,
  interpolate,
  Extrapolate,
  random,
}
