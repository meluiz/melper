/**
 * Formats a number according to the specified locale and options.
 *
 * @param {number} input - The number to format.
 * @param {string | string[]} [locale] - The locale or locales to use for formatting. If not provided, the default locale is used.
 * @param {Intl.NumberFormatOptions} [options] - The formatting options to use.
 * @return {string} - The formatted number as a string.
 */
export function format(input: number, locale?: string | string[], options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(locale, options).format(input)
}
