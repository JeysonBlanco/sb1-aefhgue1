import React from 'react';
import { HelpCircle, Box, Scale, DollarSign, Ship, Plane, Package } from 'lucide-react';
import { colors } from '../theme/colors';
import { VolumeVisualGuide } from './VolumeVisualGuide';
import { NonStackableInfo } from './NonStackableInfo';
import { TestimonialsSection } from './TestimonialsSection';

export function EducationalSection() {
  return (
    <div className="space-y-8">
      {/* Visual Guide Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Guía Visual: Cálculo de Peso Volumétrico
        </h2>
        <VolumeVisualGuide />
      </section>

      {/* Shipping Types Info */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Modalidades de Embarque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Ship className="h-8 w-8 mb-4" style={{ color: colors.secondary.main }} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Marítimo</h3>
            <p className="text-gray-600">
              Factor de conversión: 1:1000
              <br />
              Ideal para cargas grandes y pesadas sin urgencia.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Plane className="h-8 w-8 mb-4" style={{ color: colors.secondary.main }} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aéreo</h3>
            <p className="text-gray-600">
              Factor de conversión: 1:6000
              <br />
              Perfecto para envíos urgentes y de valor medio-alto.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Package className="h-8 w-8 mb-4" style={{ color: colors.secondary.main }} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Courier</h3>
            <p className="text-gray-600">
              Factor de conversión: 1:5000
              <br />
              Óptimo para paquetes pequeños y documentos express.
            </p>
          </div>
        </div>
      </section>

      {/* Non-Stackable Info */}
      <NonStackableInfo />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {[
            {
              icon: <Scale className="h-6 w-6" style={{ color: colors.secondary.main }} />,
              question: '¿Qué diferencia hay entre peso real y peso volumétrico?',
              answer: 'El peso real es la masa física de la mercancía medida en kilogramos, mientras que el peso volumétrico es un cálculo basado en el espacio que ocupa la carga. Las empresas de transporte utilizan el mayor de estos dos valores para determinar el costo del envío.'
            },
            {
              icon: <DollarSign className="h-6 w-6" style={{ color: colors.secondary.main }} />,
              question: '¿Cómo afectan las tarifas al peso facturable?',
              answer: 'Las tarifas se aplican al peso facturable, que es el mayor entre el peso real y el volumétrico. Cada modalidad de envío (Marítimo, Aéreo, Courier) tiene diferentes factores de conversión que afectan al cálculo final.'
            },
            {
              icon: <Box className="h-6 w-6" style={{ color: colors.secondary.main }} />,
              question: '¿Qué sucede si mis dimensiones o peso son incorrectos?',
              answer: 'Proporcionar dimensiones o pesos incorrectos puede resultar en ajustes de facturación, retrasos en el envío y costos adicionales. Es crucial proporcionar información precisa.'
            },
            {
              icon: <HelpCircle className="h-6 w-6" style={{ color: colors.secondary.main }} />,
              question: '¿Por qué se utilizan diferentes factores de conversión?',
              answer: 'Los diferentes factores (1:6000 para aéreo, 1:5000 para courier y 1:1000 para marítimo) reflejan las distintas características y restricciones de cada modo de transporte, optimizando el espacio y los costos según el método de envío.'
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">{faq.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}