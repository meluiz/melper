// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { isNumber } from './is-number'
import { isString } from './is-string'
import { lookup } from './lookup'

const object = {}
export const type = Object.assign(object, {
  lookup,
  isNumber,
  isString,
})

export type * from './lookup'
