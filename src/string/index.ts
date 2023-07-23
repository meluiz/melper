import { createId, getConstants, init, isCuid } from '@paralleldrive/cuid2'

export { default as slugify } from 'slugify'
export * from './cases/camel-case'
export * from './cases/dash-case'
export * from './cases/dot-case'
export * from './cases/no-case'
export * from './cases/pascal-case'
export * from './cases/sentence-case'
export * from './cases/snake-case'
export * from './capitalize'
export * from './encode-symbols'
export * from './escape-html'
export * from './excerpt'
export * from './generate-random'
export * from './lower'
export * from './pluralize'
export * from './pretty-bytes'
export * from './pretty-ms'
export * from './singularize'
export * from './truncate'
export * from './upper'

export const cuid = createId
export { createId, getConstants, init, isCuid }
