import React from 'react';
import { Star, Quote } from 'lucide-react';
import { colors } from '../theme/colors';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "ImportEx Solutions",
    content: "La calculadora nos ayudó a optimizar nuestros envíos aéreos, reduciendo costos en un 15% al entender mejor el peso volumétrico.",
    rating: 5
  },
  {
    name: "Ana María Vega",
    company: "Global Trade Corp",
    content: "Excelente herramienta para planificar envíos. La función de carga no apilable nos evitó varios problemas logísticos.",
    rating: 5
  },
  {
    name: "Roberto Méndez",
    company: "Logistics Pro",
    content: "Indispensable para cualquier empresa de comercio internacional. Los cálculos precisos nos han ahorrado tiempo y dinero.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
        <Star className="h-6 w-6" style={{ color: colors.secondary.main }} />
        Casos de Éxito
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <Quote className="h-8 w-8 mb-4" style={{ color: colors.secondary.main }} />
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4"
                  style={{ color: colors.secondary.main }}
                  fill={colors.secondary.main}
                />
              ))}
            </div>
            <div>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}