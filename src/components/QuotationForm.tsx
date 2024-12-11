import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { colors } from '../theme/colors';
import { CalculationResult } from '../types/calculator';
import { requestQuotation } from '../services/quotation';
import { createHubSpotContact } from '../services/hubspot';

interface QuotationFormProps {
  calculationResult: CalculationResult;
}

export function QuotationForm({ calculationResult }: QuotationFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    origin: '',
    destination: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Create contact in HubSpot
      await createHubSpotContact({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        phone: formData.phone,
      }, calculationResult);

      // Request quotation
      await requestQuotation({
        calculationResult,
        origin: formData.origin,
        destination: formData.destination,
        contactData: {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          company: formData.company,
          phone: formData.phone,
        },
      });

      toast.success('Solicitud de cotización enviada exitosamente');
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        origin: '',
        destination: '',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al enviar la solicitud. Por favor, intente nuevamente.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Solicitar Cotización
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form fields remain the same */}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white transition-colors ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        style={{ backgroundColor: colors.secondary.main }}
      >
        <Send className="h-5 w-5" />
        {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
      </button>
    </form>
  );
}