export const DEFAULT_OPTIONS = {
  NORMALIZED_WORDS: {
    prefix: '',
    keep: [],
    strict: true,
  },
  TRUNCATED_STRING: {
    type: 'words',
    tags: true,
    strict: true,
    ellipsis: '...',
  },
} as const

export const SELF_CLOSING_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]

export const DURATION_UNITIES = [
  {
    unities: ['ms', 'msec', 'msecs', 'millisecond', 'milliseconds'],
    value: 1,
  },
  {
    unities: ['s', 'sec', 'secs', 'second', 'seconds'],
    value: 1e3,
  },
  {
    unities: ['m', 'min', 'mins', 'minute', 'minutes'],
    value: 60e3,
  },
  {
    unities: ['h', 'hr', 'hrs', 'hour', 'hours'],
    value: 3600e3,
  },
  {
    unities: ['d', 'day', 'days'],
    value: 86400e3,
  },
  {
    unities: ['w', 'wk', 'wks', 'week', 'weeks'],
    value: 7 * 86400e3,
  },
  {
    unities: ['y', 'yr', 'yrs', 'year', 'years'],
    value: 365.25 * 86400e3,
  },
]

export const DURATION_UNITIES_MAP = new Map(
  DURATION_UNITIES.flatMap(({ unities, value }) => {
    return unities.map((unity) => [unity, value] as const)
  }),
)

export const DURATION_FORMAT_ORDER = [
  {
    short: 'ms',
    long: 'millisecond',
    limit: DURATION_UNITIES_MAP.get('s'),
    divisor: DURATION_UNITIES_MAP.get('ms'),
  },
  {
    short: 's',
    long: 'second',
    limit: DURATION_UNITIES_MAP.get('m'),
    divisor: DURATION_UNITIES_MAP.get('s'),
  },
  {
    short: 'm',
    long: 'minute',
    limit: DURATION_UNITIES_MAP.get('h'),
    divisor: DURATION_UNITIES_MAP.get('m'),
  },
  {
    short: 'h',
    long: 'hour',
    limit: DURATION_UNITIES_MAP.get('d'),
    divisor: DURATION_UNITIES_MAP.get('h'),
  },
  {
    short: 'd',
    long: 'day',
    limit: DURATION_UNITIES_MAP.get('y'),
    divisor: DURATION_UNITIES_MAP.get('d'),
  },
  {
    short: 'y',
    long: 'year',
    limit: Number.POSITIVE_INFINITY,
    divisor: DURATION_UNITIES_MAP.get('y'),
  },
]
