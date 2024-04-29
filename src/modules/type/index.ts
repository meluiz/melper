// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lookup } from './lookup'

const object = {}
export const type = Object.assign(object, {
  lookup,
})

export type * from './lookup'
