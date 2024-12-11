import React from 'react';
import { Package } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#001E5D] to-[#002DA4] border-b border-[#002DA4]/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#001E5D] mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Package className="h-12 w-12 text-[#2AD4AE]" /> 
            <h2 className="text-base font-semibold text-[#2AD4AE] tracking-wide uppercase">
              Calculadora Logística
            </h2>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Calcula el Peso</span>
            <span className="block text-[#2AD4AE]">Facturable de tu Carga</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Optimiza tus costos de envío con nuestra calculadora inteligente. Obtén el peso facturable exacto para tus envíos marítimos y aéreos.
          </p>
        </div>
      </div>
    </div>
  );
}