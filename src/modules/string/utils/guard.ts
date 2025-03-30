export const hasOwnProp = <T extends object, K extends PropertyKey>(
  data: T,
  key: K,
): data is T & Record<K, unknown> => {
  return Object.prototype.hasOwnProperty.call(data, key)
}
