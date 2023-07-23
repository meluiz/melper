/**
 * Checks if the input number is a float.
 *
 * @param {number} input - The number to be checked.
 * @return {boolean} True if the input is a float, false otherwise.
 */
export function isFloat(input: number): input is number {
  return input !== (input | 0)
}
