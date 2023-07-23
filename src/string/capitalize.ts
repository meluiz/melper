/**
 * Capitalizes the first letter of a string.
 *
 * @param input - The input string.
 * @returns The capitalized string.
 */
export function capitalize<S extends string>(input: S) {
  return (input.charAt(0).toUpperCase() + input.slice(1)) as Capitalize<S>
}
