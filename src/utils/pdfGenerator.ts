import { jsPDF } from 'jspdf';
import { CalculationResult, PackageResult } from '../types/calculator';
import { formatDimension, formatVolume } from './conversions';

export const generatePDF = (results: CalculationResult, cargoType: string): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 30, 93); // #001E5D
  doc.text('Reporte de Cubicaje', pageWidth / 2, 20, { align: 'center' });
  
  // Subheader
  doc.setFontSize(12);
  doc.setTextColor(42, 212, 174); // #2AD4AE
  doc.text(`Modalidad de Embarque: ${cargoType}`, pageWidth / 2, 30, { align: 'center' });
  
  let yPos = 50;
  
  // Package Details
  results.packages.forEach((pkg: PackageResult, index: number) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Paquete ${index + 1}`, 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    const details = [
      `Dimensiones: ${formatDimension(pkg.dimensions.length, pkg.dimensions.unit)} × ${formatDimension(pkg.dimensions.width, pkg.dimensions.unit)} × ${formatDimension(pkg.dimensions.height, pkg.dimensions.unit)}`,
      `Volumen: ${formatVolume(pkg.volumeDisplay.value, pkg.volumeDisplay.unit)}`,
      `Peso Volumétrico: ${pkg.volumetricWeight.toFixed(2)} kg`,
      `Peso Real: ${pkg.actualWeight.toFixed(2)} kg`,
      `Peso Facturable: ${pkg.chargeableWeight.toFixed(2)} kg`,
      `Piezas: ${pkg.pieces}`,
      pkg.nonStackable ? '⚠️ Carga No Apilable' : ''
    ];
    
    details.forEach(detail => {
      if (detail) {
        doc.text(detail, 30, yPos);
        yPos += 7;
      }
    });
    
    yPos += 5;
  });
  
  // Totals
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(0, 30, 93);
  doc.text('Totales', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  [
    `Total Piezas: ${results.totals.totalPieces}`,
    `Volumen Total: ${results.totals.totalVolume.toFixed(3)} m³`,
    `Peso Volumétrico Total: ${results.totals.totalVolumetricWeight.toFixed(2)} kg`,
    `Peso Real Total: ${results.totals.totalActualWeight.toFixed(2)} kg`,
    `Peso Facturable Total: ${results.totals.totalChargeableWeight.toFixed(2)} kg`
  ].forEach(total => {
    doc.text(total, 30, yPos);
    yPos += 7;
  });
  
  // Recommendations
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }
  
  yPos += 10;
  doc.setFontSize(12);
  doc.setTextColor(42, 212, 174);
  doc.text('Recomendaciones para Optimización', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const recommendations = [
    'Considere consolidar envíos pequeños para aprovechar mejor el espacio.',
    'Revise las dimensiones de embalaje para minimizar espacios vacíos.',
    'Para cargas no apilables, evalúe opciones de embalaje que permitan apilamiento.',
    'Compare costos entre modalidades de transporte para rutas específicas.'
  ];
  
  recommendations.forEach(rec => {
    doc.text('• ' + rec, 30, yPos, { maxWidth: pageWidth - 60 });
    yPos += 10;
  });
  
  // Save the PDF
  doc.save('reporte-cubicaje.pdf');
};