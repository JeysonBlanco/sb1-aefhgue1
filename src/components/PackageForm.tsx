import React from 'react';
import { Package, LengthUnit } from '../types/calculator';
import { Trash2, AlertCircle } from 'lucide-react';
import { colors } from '../theme/colors';

interface PackageFormProps {
  package: Package;
  index: number;
  onChange: (index: number, pkg: Package) => void;
  onRemove: (index: number) => void;
  showRemove: boolean;
}

export function PackageForm({ package: pkg, index, onChange, onRemove, showRemove }: PackageFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      onChange(index, {
        ...pkg,
        [name]: (e.target as HTMLInputElement).checked
      });
      return;
    }

    if (type === 'number') {
      const numValue = value === '' ? '' : Number(value);
      onChange(index, {
        ...pkg,
        [name]: numValue
      });
      return;
    }

    onChange(index, {
      ...pkg,
      [name]: value
    });
  };

  return (
    <div className="bg-white/80 p-4 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Paquete {index + 1}</h3>
        {showRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 className="h-5 w-5" style={{ color: colors.secondary.main }} />
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor={`unit-${index}`} className="block text-sm font-medium text-gray-700">
            Unidad de medida
          </label>
          <select
            id={`unit-${index}`}
            name="unit"
            value={pkg.unit}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="cm">Centímetros (cm)</option>
            <option value="mm">Milímetros (mm)</option>
            <option value="in">Pulgadas (in)</option>
            <option value="ft">Pies (ft)</option>
          </select>
        </div>

        {[
          { name: 'length', label: `Largo (${pkg.unit})`, placeholder: '100' },
          { name: 'width', label: `Ancho (${pkg.unit})`, placeholder: '80' },
          { name: 'height', label: `Alto (${pkg.unit})`, placeholder: '60' },
          { name: 'weight', label: 'Peso (kg)', placeholder: '50' },
          { name: 'pieces', label: 'Piezas', placeholder: '1', min: '1' }
        ].map(field => (
          <div key={field.name}>
            <label htmlFor={`${field.name}-${index}`} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type="number"
              id={`${field.name}-${index}`}
              name={field.name}
              value={pkg[field.name as keyof Package]}
              onChange={handleChange}
              placeholder={field.placeholder}
              min={field.min || '0'}
              step="any"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        ))}

        <div className="col-span-2">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`nonStackable-${index}`}
                name="nonStackable"
                type="checkbox"
                checked={pkg.nonStackable}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor={`nonStackable-${index}`} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                Carga No Apilable
                <AlertCircle className="h-4 w-4" style={{ color: colors.secondary.main }} />
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Marcar si la carga no puede ser apilada. Se duplicará la altura para el cálculo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}