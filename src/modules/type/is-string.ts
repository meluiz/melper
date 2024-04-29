// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lookup } from './lookup'

/**
 * Return `true` if the input is a string
 *
 * @example
 * type.isString('string') // true
 * type.isString(123) // false
 */
export const isString = function (input?: unknown): input is string {
  return lookup(input) === 'string'
}
