export const random = (min: number, max: number) => {
  if (min > max) {
    throw new Error('Minimum value cannot be greater than maximum value.')
  }

  return Math.random() * (max - min) + min
}
