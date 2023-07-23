/**
 * Checks if the input is an integer.
 *
 * @param {number} input - The number to be checked.
 * @return {boolean} Returns true if the input is an integer, otherwise false.
 */
export function isInteger(input: number): input is number {
  return Number.isInteger(input)
}
