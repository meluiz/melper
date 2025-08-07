import { getMillisecondsFormat, getMillisecondsParse } from './utils/helpers'

type DurationUnit =
  | 'Years'
  | 'Year'
  | 'Yrs'
  | 'Yr'
  | 'Y'
  | 'Weeks'
  | 'Week'
  | 'W'
  | 'Days'
  | 'Day'
  | 'D'
  | 'Hours'
  | 'Hour'
  | 'Hrs'
  | 'Hr'
  | 'H'
  | 'Minutes'
  | 'Minute'
  | 'Mins'
  | 'Min'
  | 'M'
  | 'Seconds'
  | 'Second'
  | 'Secs'
  | 'Sec'
  | 's'
  | 'Milliseconds'
  | 'Millisecond'
  | 'Msecs'
  | 'Msec'
  | 'Ms'

type DurationUnitAnyCase =
  | DurationUnit
  | Uppercase<DurationUnit>
  | Lowercase<DurationUnit>

export type PrettyDuration =
  | `${number}`
  | `${number}${DurationUnitAnyCase}`
  | `${number} ${DurationUnitAnyCase}`

/**
 * Converts a number of milliseconds into a human-readable duration string.
 *
 * @param input - The number of milliseconds to format.
 * @param long - Whether to use the long format (e.g. "1 hour" vs "1h").
 * @returns A formatted duration string.
 *
 * @signature
 *    string.fromMilliseconds(3600000, true);
 * @example
 *    fromMilliseconds(3600000);
 *    // => "1h"
 *
 *    fromMilliseconds(3600000, true);
 *    // => "1 hour"
 *
 * @category String
 */
export const fromMilliseconds = (input: number, long?: boolean) => {
  return getMillisecondsFormat(input, long) as PrettyDuration
}

/**
 * Parses a duration expression into milliseconds.
 *
 * @param input - The duration to parse, either a number (milliseconds) or a string expression.
 * @returns The duration in milliseconds.
 * @throws {TypeError} If the input is not a valid duration expression.
 *
 * @signature
 *    string.toMilliseconds("1h");
 * @example
 *    toMilliseconds("1h");
 *    // => 3600000
 *
 *    toMilliseconds(500);
 *    // => 500
 *
 * @category String
 */
export const toMilliseconds = (input: string | number) => {
  if (typeof input === 'number') {
    return input
  }

  const milliseconds = getMillisecondsParse(input)

  if (milliseconds == null) {
    throw new TypeError(`Invalid duration expression "${input}"`)
  }

  return milliseconds
}

}

/**
 * Converts a number of seconds into a human-readable duration string.
 *
 * @param input - The number of seconds to format.
 * @param long - Whether to use the long format (e.g. "1 minute" vs "1m").
 * @returns A formatted duration string.
 *
 * @signature
 *    string.fromSeconds(60, true);
 * @example
 *    fromSeconds(60);
 *    // => "1m"
 *
 *    fromSeconds(60, true);
 *    // => "1 minute"
 *
 * @category String
 */
export const fromSeconds = (input: number, long?: boolean) => {
  return getMillisecondsFormat(input * 1000, long) as PrettyDuration
}

/**
 * Parses a duration expression into seconds.
 *
 * @param input - The duration to parse, either a number (seconds) or a string expression.
 * @returns The duration in seconds (integer).
 * @throws {TypeError} If the input is not a valid duration expression.
 *
 * @signature
 *    string.toSeconds("2h");
 * @example
 *    toSeconds("2h");
 *    // => 7200
 *
 *    toSeconds(30);
 *    // => 30
 *
 * @category String
 */
export const toSeconds = (input: string | number) => {
  if (typeof input === 'number') {
    return input
  }

  const milliseconds = getMillisecondsParse(input)

  if (milliseconds == null) {
    throw new TypeError(`Invalid duration expression "${input}"`)
  }

  return Math.floor(milliseconds / 1000)
}
