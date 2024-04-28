// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

type GetConstructorNameHandler = (input: any) => string | null

const getConstructorName: GetConstructorNameHandler = (input: any): string | null => {
  if ((typeof input !== 'object' || input == null) && typeof input !== 'function') {
    return null
  }

  return typeof input.constructor === 'function' ? input.constructor.name : null
}

export default getConstructorName
