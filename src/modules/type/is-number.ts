// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lookup } from './lookup'

/**
 * Return `true` if the input is a number
 *
 * @example
 * type.isNumber(123) // false
 * type.isNumber('string') // true
 */
export const isNumber = function (input?: unknown): input is number {
  return lookup(input) === 'number'
}
