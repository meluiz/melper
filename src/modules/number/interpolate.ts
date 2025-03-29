import type { Ranges } from "./types";

export enum Extrapolate {
  Clamp = 'clamp',
  Extend = 'extend',
  Identity = 'identity'
}

/**
 * Interpolates a given value from the input range to the corresponding output range.
 *
 * @param value - The number to be interpolated.
 * @param ranges - Object containing the 'input' and 'output' arrays defining the interpolation ranges.
 * @param extrapolate - Strategy to use when the value is outside the input range. Defaults to 'clamp'.
 * 
 * @returns The interpolated number based on the provided ranges and extrapolation strategy.
 * 
 * @throws {RangeError} If the 'input' and 'output' arrays have different lengths.
 * @throws {RangeError} If the 'input' array contains less than two elements.
 * 
 * @signature
 *    number.interpolate(value, { input, output }, extrapolate);
 * @example
 *    interpolate(5, { input: [0, 10], output: [0, 100] });
 *    // => 50
 *    
 *    interpolate(-5, { input: [0, 10], output: [0, 100] }, Extrapolate.Clamp);
 *    // => 0
 *    
 *    interpolate(15, { input: [0, 10], output: [0, 100] }, Extrapolate.Identity);
 *    // => 15
 * @category Number
 */

export const interpolate = (
  value: number,
  ranges: Ranges,
  extrapolate: Extrapolate = Extrapolate.Clamp
): number => {
  const { input, output } = ranges;

  validateRanges(ranges)

  const firstInput = input[0];
  const lastInput = input[input.length - 1];

  if (value <= firstInput) {
    if (extrapolate === Extrapolate.Clamp) {
      return output[0];
    }

    if (extrapolate === Extrapolate.Identity) {
      return value;
    }


    if (extrapolate === Extrapolate.Extend) {
      return interpolateSegment(value, {
        inMinMax: [input[0], input[1]],
        outMinMax: [output[0], output[1]]
      });
    }
  }

  if (value >= lastInput) {
    if (extrapolate === Extrapolate.Clamp) {
      return output[output.length - 1];
    }

    if (extrapolate === Extrapolate.Identity) {
      return value;
    }

    if (extrapolate === Extrapolate.Extend) {
      const lastIndex = input.length - 1;

      return interpolateSegment(
        value,
        {
          inMinMax: [input[lastIndex - 1], input[lastIndex]],
          outMinMax: [output[lastIndex - 1], output[lastIndex]]
        }
      );
    }
  }

  const segmentIndex = getSegmentIndex(value, input);

  if (segmentIndex === -1) {
    throw new Error('Value is out of range and no valid segment was found.');
  }

  return interpolateSegment(
    value,
    {
      inMinMax: [input[segmentIndex], input[segmentIndex + 1]],
      outMinMax: [output[segmentIndex], output[segmentIndex + 1]]
    }
  );
};

const validateRanges = (ranges: Ranges): void => {
  const { input, output } = ranges;

  if (input.length !== output.length) {
    throw new RangeError(
      `Input (length: ${input.length}) and output (length: ${output.length}) must be the same length.`
    );
  }
  if (input.length < 2) {
    throw new RangeError(
      `Input must contain at least two elements for interpolation, received ${input.length}.`
    );
  }
};

interface Segments {
  inMinMax: [Min: number, Max: number];
  outMinMax: [Min: number, Max: number];
}

const interpolateSegment = (value: number, segments: Segments): number => {
  const { inMinMax, outMinMax } = segments;
  const ratio = (value - inMinMax[0]) / (inMinMax[1] - inMinMax[0]);

  return outMinMax[0] + ratio * (outMinMax[1] - outMinMax[0]);
};

const getSegmentIndex = (value: number, input: number[]): number => {
  for (let i = 0; i < input.length - 1; i++) {
    if (value >= input[i] && value <= input[i + 1]) {
      return i;
    }
  }

  return -1;
};