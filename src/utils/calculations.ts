import { Dimensions, CalculationResult, Package, PackageResult, CargoType, LengthUnit } from '../types/calculator';
import { convertToCubicMeters, convertToCubicFeet } from './conversions';

const getVolumetricDivisor = (cargoType: CargoType): number => {
  switch (cargoType) {
    case 'Aéreo':
      return 6000;
    case 'Courier':
      return 5000;
    case 'Marítimo':
    default:
      return 1000;
  }
};

const calculatePackage = (pkg: Package, cargoType: CargoType): PackageResult => {
  const { length, width, height, weight, pieces, unit, nonStackable } = pkg;
  
  // Handle empty string values
  const l = typeof length === 'string' ? 0 : length;
  const w = typeof width === 'string' ? 0 : width;
  const h = typeof height === 'string' ? 0 : height;
  const actualWeight = typeof weight === 'string' ? 0 : weight;
  
  // For non-stackable cargo, double the height for volume calculation
  const effectiveHeight = nonStackable ? h * 2 : h;
  
  // Calculate volume in cubic meters
  const volume = convertToCubicMeters(l, w, effectiveHeight, unit) * pieces;
  
  // Calculate volumetric weight based on cargo type
  const divisor = getVolumetricDivisor(cargoType);
  const volumetricWeight = ((l * w * effectiveHeight) / divisor) * pieces;
  
  const chargeableWeight = Math.max(actualWeight * pieces, volumetricWeight);
  
  return {
    volume,
    volumetricWeight,
    actualWeight: actualWeight * pieces,
    chargeableWeight,
    pieces,
    nonStackable,
    dimensions: {
      length: l,
      width: w,
      height: h,
      unit
    },
    volumeDisplay: {
      value: unit === 'ft' ? convertToCubicFeet(volume) : volume,
      unit: unit === 'ft' ? 'ft³' : 'm³'
    }
  };
};

export const calculateCubicaje = (dimensions: Dimensions): CalculationResult => {
  const packageResults = dimensions.packages.map(pkg => 
    calculatePackage(pkg, dimensions.cargoType)
  );

  const totals = packageResults.reduce((acc, curr) => ({
    totalVolume: acc.totalVolume + curr.volume,
    totalVolumetricWeight: acc.totalVolumetricWeight + curr.volumetricWeight,
    totalActualWeight: acc.totalActualWeight + curr.actualWeight,
    totalChargeableWeight: acc.totalChargeableWeight + curr.chargeableWeight,
    totalPieces: acc.totalPieces + curr.pieces
  }), {
    totalVolume: 0,
    totalVolumetricWeight: 0,
    totalActualWeight: 0,
    totalChargeableWeight: 0,
    totalPieces: 0
  });

  return {
    packages: packageResults,
    totals
  };
};