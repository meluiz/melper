import bytes from 'bytes'

/**
 * Converts the input to bytes.
 *
 * @param {string | number} input - The input value to be converted to bytes.
 * @return {number} - The converted value in bytes.
 */
export function toBytes(input: string | number) {
  if (typeof input === 'number') {
    return input
  }

  return bytes.parse(input)
}
