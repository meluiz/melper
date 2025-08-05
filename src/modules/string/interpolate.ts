import { hasOwnProp } from './utils/guards'

/**
 * Replaces placeholders in the form `{{key}}` in the input string with corresponding
 * values found in the `data` object. If a placeholder is prefixed by a backslash (`\`),
 * it is considered escaped and the placeholder is returned as-is (without interpolation).
 *
 * The placeholder keys can refer to nested properties by using a dot notation (e.g. `user.name`).
 * If the property does not exist within the `data`, the placeholder is replaced with `undefined`.
 *
 * @param input - The string containing placeholders to be replaced.
 * @param data - The object that provides values for the placeholders.
 * @returns A new string with all matching placeholders replaced by their corresponding values.
 *
 * @signature
 *    string.interpolate("hello {{ user.name }}", { user: { name: "John" }});
 * @example
 *    interpolate("hello {{ user.name }}", { user: { name: "John" }});
 *    // => "hello, John!"
 *
 *    interpolate("This is an escaped placeholder: \\{{ users.0 }}", {});
 *    // => "This is an escaped placeholder: {{ users.0 }}"
 *
 * @category String
 */

export const interpolate = <T extends object>(input: string, data: T) => {
  return input.replace(/(\\)?{{(.*?)}}/g, (match, slash, key) => {
    if (slash) {
      return match.replace(slash, '')
    }

    key = key.trim()
    return parseInterpolate(data, key)
  })
}

const parseInterpolate = (data: any, key: string) => {
  const tokens = key.split('.')

  while (tokens.length) {
    if (data == null || typeof data !== 'object') {
      return undefined
    }

    const token = tokens.shift()

    data = token
      ? hasOwnProp(data, token)
        ? data[token]
        : undefined
      : undefined
  }

  return data
}
