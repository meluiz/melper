/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string to generate.
 * @return {string} - The randomly generated string.
 */
export function generateRandom(length: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let idx = 0
  let random = ''

  while (idx < length) {
    idx++
    random += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return random
}
