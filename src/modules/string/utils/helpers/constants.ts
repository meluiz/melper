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
