import { CalculationResult } from '../types/calculator';

// Mock API for development
const mockAPI = {
  post: async (endpoint: string, data: any) => {
    console.log('Mock API call to:', endpoint, 'with data:', data);
    return { data: { id: 'mock-quotation-id', ...data } };
  }
};

// Get API client based on environment
const getAPIClient = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  if (!baseURL) {
    console.warn('API base URL not found, using mock API');
    return mockAPI;
  }
  
  // Only import axios if API URL is available
  const axios = require('axios');
  return axios.create({ baseURL });
};

export interface QuotationRequest {
  calculationResult: CalculationResult;
  origin: string;
  destination: string;
  contactData: {
    email: string;
    name: string;
    company?: string;
    phone?: string;
  };
}

export const requestQuotation = async (data: QuotationRequest) => {
  try {
    const api = getAPIClient();
    const response = await api.post('/quotations', data);
    return response.data;
  } catch (error) {
    console.error('Error requesting quotation:', error);
    // Return a more user-friendly error
    throw new Error('No se pudo procesar la cotización. Por favor, intente nuevamente.');
  }
};