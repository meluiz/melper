/**
 * Throws an error if the provided input is not a string.
 */
export const throwInvalidInput = (input?: string): void => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string.')
  }
}
