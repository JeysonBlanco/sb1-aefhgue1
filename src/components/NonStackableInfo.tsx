import React from 'react';
import { AlertCircle } from 'lucide-react';
import { colors } from '../theme/colors';

export function NonStackableInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <div className="flex items-start gap-4">
        <AlertCircle className="h-8 w-8 flex-shrink-0" style={{ color: colors.secondary.main }} />
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Carga No Apilable: Lo que necesitas saber
          </h2>
          <div className="prose prose-sm text-gray-600">
            <p className="mb-4">
              La carga no apilable requiere consideraciones especiales en el cálculo del peso volumétrico
              debido a sus características únicas. Cuando una carga se marca como "no apilable", se aplica
              un factor de ajuste que duplica la altura efectiva para el cálculo.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              ¿Cuándo se considera una carga como no apilable?
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Mercancía frágil o delicada</li>
              <li>Productos con superficie irregular o inestable</li>
              <li>Artículos con etiquetas de "Este lado arriba"</li>
              <li>Equipos sensibles o calibrados</li>
              <li>Materiales que podrían deformarse bajo presión</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
              Implicaciones en el cálculo
            </h3>
            <p className="mb-4">
              Al marcar una carga como no apilable, nuestro calculador:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Duplica automáticamente la altura para el cálculo del volumen</li>
              <li>Ajusta el peso volumétrico considerando el espacio vertical adicional</li>
              <li>Refleja el costo real del espacio ocupado en el contenedor o aeronave</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}