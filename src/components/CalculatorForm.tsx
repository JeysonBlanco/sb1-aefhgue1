import React from 'react';
import { CargoType, Dimensions, Package, LengthUnit } from '../types/calculator';
import { PackageForm } from './PackageForm';
import { Plus } from 'lucide-react';
import { colors } from '../theme/colors';

interface CalculatorFormProps {
  onSubmit: (dimensions: Dimensions) => void;
}

const defaultPackage: Package = {
  length: '',
  width: '',
  height: '',
  weight: '',
  pieces: 1,
  unit: 'cm' as LengthUnit,
  nonStackable: false
};

export function CalculatorForm({ onSubmit }: CalculatorFormProps) {
  const [formData, setFormData] = React.useState<Dimensions>({
    packages: [{ ...defaultPackage }],
    cargoType: 'Marítimo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePackageChange = (index: number, pkg: Package) => {
    const newPackages = [...formData.packages];
    newPackages[index] = pkg;
    setFormData(prev => ({ ...prev, packages: newPackages }));
  };

  const handleAddPackage = () => {
    setFormData(prev => ({
      ...prev,
      packages: [...prev.packages, { ...defaultPackage }]
    }));
  };

  const handleRemovePackage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <label htmlFor="cargoType" className="block text-sm font-medium text-gray-900 mb-1">
          Modalidad de Embarque
        </label>
        <select
          id="cargoType"
          value={formData.cargoType}
          onChange={(e) => setFormData(prev => ({ ...prev, cargoType: e.target.value as CargoType }))}
          className="w-full px-4 py-2 bg-white/90 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="Marítimo">Marítimo</option>
          <option value="Aéreo">Aéreo</option>
          <option value="Courier">Courier</option>
        </select>
      </div>

      <div className="space-y-4">
        {formData.packages.map((pkg, index) => (
          <PackageForm
            key={index}
            package={pkg}
            index={index}
            onChange={handlePackageChange}
            onRemove={handleRemovePackage}
            showRemove={formData.packages.length > 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddPackage}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
      >
        <Plus className="h-5 w-5" />
        Agregar otro paquete
      </button>

      <button
        type="submit"
        style={{ backgroundColor: colors.primary.main }}
        className="w-full text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
      >
        Calcular
      </button>
    </form>
  );
}