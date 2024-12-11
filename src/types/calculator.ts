export type CargoType = 'Marítimo' | 'Aéreo' | 'Courier';
export type LengthUnit = 'cm' | 'mm' | 'in' | 'ft';
export type VolumeUnit = 'm³' | 'ft³';

export interface Package {
  length: number | '';
  width: number | '';
  height: number | '';
  weight: number | '';
  pieces: number;
  unit: LengthUnit;
  nonStackable: boolean;
}

export interface Dimensions {
  packages: Package[];
  cargoType: CargoType;
}

export interface PackageResult {
  volume: number;
  volumetricWeight: number;
  actualWeight: number;
  chargeableWeight: number;
  pieces: number;
  nonStackable: boolean;
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: LengthUnit;
  };
  volumeDisplay: {
    value: number;
    unit: VolumeUnit;
  };
}

export interface CalculationResult {
  packages: PackageResult[];
  totals: {
    totalVolume: number;
    totalVolumetricWeight: number;
    totalActualWeight: number;
    totalChargeableWeight: number;
    totalPieces: number;
  };
}