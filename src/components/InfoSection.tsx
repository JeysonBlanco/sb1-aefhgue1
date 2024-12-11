import React from 'react';
import { Calculator } from 'lucide-react';
import { colors } from '../theme/colors';

export function InfoSection() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="h-6 w-6" style={{ color: colors.secondary.main }} />
        <h2 className="text-2xl font-semibold text-gray-900">
          Calculadora Interactiva
        </h2>
      </div>
      
      <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
        <p className="text-gray-600">
          Utiliza nuestra calculadora para determinar el peso facturable de tu envío.
          Ingresa las dimensiones y el peso de tus paquetes, y te mostraremos los
          resultados detallados para ayudarte a tomar la mejor decisión.
        </p>
      </div>
    </div>
  );
}