type CheckClassHandler = (input: any) => boolean

export const checkClass: CheckClassHandler = (input) => {
  const isClassRegex = /^class\s/
  const transpiledClassPatterns = [
    /classCallCheck\(/,
    /_classCallCheck\(/,
    /__decorate\(/,
  ]

  return (
    isClassRegex.test(input.toString()) ||
    transpiledClassPatterns.some((pattern) => pattern.test(input.toString()))
  )
}
