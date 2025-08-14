import { clamp } from './clamp'
import { Extrapolate, interpolate } from './interpolate'

export type { Limits, Ranges, SafeNumber } from './types'

export { clamp, interpolate, Extrapolate }
export default {
  clamp,
  interpolate,
  Extrapolate,
}
