import { DURATION_FORMAT_ORDER, DURATION_UNITIES_MAP } from './constants'
import { throwInvalidInput } from './validation'

/**
 * Parses a string input into milliseconds.
 */
export const getMillisecondsParse = (input: string) => {
  throwInvalidInput(input)

  const match = /^(-?\d+(?:\.\d+)?)(?:\s*([a-zA-Z]+))?$/i.exec(input)

  if (!match) {
    return null
  }

  const [, value, unit] = match

  const parsedValue = Number.parseFloat(value)

  if (Number.isNaN(parsedValue)) {
    return null
  }

  const key = unit ? unit.toLowerCase() : 'ms'
  const multiplier = DURATION_UNITIES_MAP.get(key)

  if (multiplier == null) {
    return null
  }

  return parsedValue * multiplier
}

/**
 * Format a number input into milliseconds.
 */
export const getMillisecondsFormat = (input?: number, long?: boolean) => {
  if (typeof input !== 'number' || Number.isNaN(input)) {
    return ''
  }

  const sign = input < 0 ? '-' : ''
  const absolute = Math.abs(input)

  for (const formatOrder of DURATION_FORMAT_ORDER) {
    const { divisor = 0, limit = 0, long: longName, short } = formatOrder

    if (absolute < limit) {
      const count = Math.round(absolute / divisor)

      if (long) {
        const unit = `${longName}${count !== 1 ? 's' : ''}`
        return `${sign}${count} ${unit}`
      }

      return `${sign}${count}${short}`
    }
  }

  return ''
}
