// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

type CheckClassHandler = (input: any) => boolean

const checkClass: CheckClassHandler = (input) => {
  const isClassRegex = /^class\s/
  const transpiledClassPatterns = [/classCallCheck\(/, /_classCallCheck\(/, /__decorate\(/]

  return (
    isClassRegex.test(input.toString()) ||
    transpiledClassPatterns.some((pattern) => pattern.test(input.toString()))
  )
}

export default checkClass
