/**
 * Checks whether an object has a given own property.
 */
export const hasOwnProp = <T extends object, K extends PropertyKey>(
  data: T,
  key: K,
): data is T & Record<K, unknown> => {
  return Object.prototype.hasOwnProperty.call(data, key)
}
