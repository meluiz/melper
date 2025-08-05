/**
 * Generates a random string of the specified length from a predefined character set.
 *
 * The predefined set includes lowercase letters (`a-z`), uppercase letters (`A-Z`),
 * digits (`0-9`), underscores (`_`), and hyphens (`-`). Each character is
 * selected uniformly at random.
 *
 * @param length - The length of the string to generate.
 * @returns A random string composed of letters, digits, underscores, and hyphens.
 *
 * @signature
 *    string.random(10);
 * @example
 *    random(8);
 *    // => "aG4_Kl9P"
 *
 *    random(0);
 *    // => ""
 *
 * @category String
 */
export const random = (length: number) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-'

  let index = 0
  let result = ''

  while (index < length) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
    index++
  }

  return result
}
