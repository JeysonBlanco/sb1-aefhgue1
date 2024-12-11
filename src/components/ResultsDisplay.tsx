import React from 'react';
import { CalculationResult } from '../types/calculator';
import { colors } from '../theme/colors';
import { ArrowLeft, AlertCircle, Download } from 'lucide-react';
import { formatDimension, formatVolume } from '../utils/conversions';
import { generatePDF } from '../utils/pdfGenerator';

interface ResultsDisplayProps {
  results: CalculationResult;
  cargoType: string;
  onBack: () => void;
}

export function ResultsDisplay({ results, cargoType, onBack }: ResultsDisplayProps) {
  const handleDownloadPDF = () => {
    generatePDF(results, cargoType);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/90 p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Resultados del Cálculo
          </h2>
          <p className="text-gray-600">
            Modalidad de embarque: {cargoType}
          </p>
        </div>

        {/* Package Results */}
        <div className="space-y-6 mb-8">
          {results.packages.map((pkg, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Paquete {index + 1}
                </h3>
                {pkg.nonStackable && (
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <AlertCircle className="h-4 w-4" />
                    No Apilable
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Dimensiones</p>
                  <p className="text-gray-900">
                    {formatDimension(pkg.dimensions.length, pkg.dimensions.unit)} × {formatDimension(pkg.dimensions.width, pkg.dimensions.unit)} × {formatDimension(pkg.dimensions.height, pkg.dimensions.unit)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Volumen</p>
                  <p className="text-gray-900">
                    {formatVolume(pkg.volumeDisplay.value, pkg.volumeDisplay.unit)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Peso Volumétrico</p>
                  <p className="text-gray-900">{pkg.volumetricWeight.toFixed(2)} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Peso Real</p>
                  <p className="text-gray-900">{pkg.actualWeight.toFixed(2)} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Peso Facturable</p>
                  <p className="font-medium text-gray-900">{pkg.chargeableWeight.toFixed(2)} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Piezas</p>
                  <p className="text-gray-900">{pkg.pieces}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="bg-[#001E5D] text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Totales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm opacity-80 mb-1">Volumen Total</p>
              <p className="text-lg font-medium">
                {results.totals.totalVolume.toFixed(3)} m³
              </p>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-1">Peso Volumétrico Total</p>
              <p className="text-lg font-medium">
                {results.totals.totalVolumetricWeight.toFixed(2)} kg
              </p>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-1">Peso Real Total</p>
              <p className="text-lg font-medium">
                {results.totals.totalActualWeight.toFixed(2)} kg
              </p>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-1">Peso Facturable Total</p>
              <p className="text-lg font-medium">
                {results.totals.totalChargeableWeight.toFixed(2)} kg
              </p>
            </div>
            <div>
              <p className="text-sm opacity-80 mb-1">Total Piezas</p>
              <p className="text-lg font-medium">
                {results.totals.totalPieces}
              </p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownloadPDF}
          className="mt-6 w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#2AD4AE] text-[#001E5D] rounded-md hover:bg-opacity-90 transition-opacity"
        >
          <Download className="h-5 w-5" />
          Descargar Reporte PDF
        </button>
      </div>

      <button
        onClick={onBack}
        className="w-full flex items-center justify-center gap-2 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
        style={{ backgroundColor: colors.primary.main }}
      >
        <ArrowLeft className="h-5 w-5" />
        Volver al calculador
      </button>
    </div>
  );
}