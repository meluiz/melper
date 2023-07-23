import kindOf from 'kind-of'

type Typeof =
  | 'undefined'
  | 'null'
  | 'boolean'
  | 'buffer'
  | 'number'
  | 'string'
  | 'arguments'
  | 'object'
  | 'date'
  | 'array'
  | 'regexp'
  | 'error'
  | 'function'
  | 'class'
  | 'generatorfunction'
  | 'symbol'
  | 'map'
  | 'weakmap'
  | 'set'
  | 'weakset'
  | 'int8array'
  | 'uint8array'
  | 'uint8clampedarray'
  | 'int16array'
  | 'uint16array'
  | 'int32array'
  | 'uint32array'
  | 'float32array'
  | 'float64array'

/**
 * Determines the type of the input value.
 *
 * @param {unknown} input - The input value to determine the type of.
 * @returns {Typeof} The type of the input value.
 */
export function typeOf(input: unknown): Typeof {
  const kind = kindOf(input)

  if (kind === 'function' && /^\s*class\s/.test(String(input))) {
    return 'class'
  }

  return kind as Typeof
}
