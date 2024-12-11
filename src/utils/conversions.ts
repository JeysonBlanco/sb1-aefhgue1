export const convertToMeters = (value: number, unit: LengthUnit): number => {
  switch (unit) {
    case 'mm':
      return value / 1000;
    case 'cm':
      return value / 100;
    case 'in':
      return value * 0.0254;
    case 'ft':
      return value * 0.3048;
    default:
      return value;
  }
};

export const convertToCubicMeters = (length: number, width: number, height: number, unit: LengthUnit): number => {
  const l = convertToMeters(length, unit);
  const w = convertToMeters(width, unit);
  const h = convertToMeters(height, unit);
  return l * w * h;
};

export const convertToCubicFeet = (cubicMeters: number): number => {
  return cubicMeters * 35.3147;
};

export const formatDimension = (value: number, unit: LengthUnit): string => {
  return `${value.toFixed(2)} ${unit}`;
};

export const formatVolume = (value: number, unit: VolumeUnit): string => {
  return `${value.toFixed(3)} ${unit}`;
};