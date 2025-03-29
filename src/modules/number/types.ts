export type SafeNumber = `${number}` | number

export interface Limits {
  readonly min?: number
  readonly max?: number
}

export interface Ranges {
  readonly input: number[]
  readonly output: number[]
}
