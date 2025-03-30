type GetConstructorNameHandler = (input: any) => string | null

export const getConstructorName: GetConstructorNameHandler = (
  input: any,
): string | null => {
  if (
    (typeof input !== 'object' || input == null) &&
    typeof input !== 'function'
  ) {
    return null
  }

  return typeof input.constructor === 'function' ? input.constructor.name : null
}
