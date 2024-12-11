import React from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../theme/colors';

export function VolumeVisualGuide() {
  return (
    <div className="space-y-8">
      {/* Interactive 3D-like Visualization */}
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 p-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48 transform rotate-12">
            {/* Cube faces */}
            <div className="absolute inset-0 border-2 border-[#2AD4AE] bg-white/50 transform perspective-1000">
              {/* Length arrow */}
              <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center">
                <div className="text-sm font-medium text-gray-700">Largo</div>
              </div>
              {/* Width arrow */}
              <div className="absolute -left-8 top-0 bottom-0 flex items-center justify-center transform -rotate-90">
                <div className="text-sm font-medium text-gray-700">Ancho</div>
              </div>
              {/* Height arrow */}
              <div className="absolute top-0 -right-8 bottom-0 flex items-center justify-center">
                <div className="text-sm font-medium text-gray-700 transform -rotate-45">Alto</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculation Steps */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Proceso de Cálculo
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Paso 1: Medir',
              content: 'Toma las medidas exactas de largo, ancho y alto de tu paquete en la unidad de medida que prefieras.'
            },
            {
              title: 'Paso 2: Multiplicar',
              content: 'Multiplica las tres dimensiones para obtener el volumen total del paquete.'
            },
            {
              title: 'Paso 3: Convertir',
              content: 'Aplica el factor de conversión según el tipo de envío (aéreo: ÷6000, marítimo: ×1000).'
            }
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>

        {/* Formula Visualization */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-sm text-gray-500">Dimensiones</div>
            <div className="font-mono">L × A × H</div>
          </div>
          <ArrowRight className="h-5 w-5" style={{ color: colors.secondary.main }} />
          <div className="text-center">
            <div className="text-sm text-gray-500">Factor</div>
            <div className="font-mono">÷ 6000 o × 1000</div>
          </div>
          <ArrowRight className="h-5 w-5" style={{ color: colors.secondary.main }} />
          <div className="text-center">
            <div className="text-sm text-gray-500">Resultado</div>
            <div className="font-mono">Peso Volumétrico</div>
          </div>
        </div>
      </div>
    </div>
  );
}