import { CalculationResult } from '../types/calculator';

// Mock HubSpot client for development
const createMockClient = () => ({
  crm: {
    contacts: {
      basicApi: {
        create: async ({ properties }: any) => {
          console.log('Mock HubSpot contact created:', properties);
          return { id: 'mock-contact-id', properties };
        }
      }
    }
  }
});

// Use mock client if API key is not available
const getHubSpotClient = () => {
  const apiKey = import.meta.env.VITE_HUBSPOT_API_KEY;
  if (!apiKey) {
    console.warn('HubSpot API key not found, using mock client');
    return createMockClient();
  }
  
  // Only import HubSpot client if API key is available
  const { Client } = require('@hubspot/api-client');
  return new Client({ accessToken: apiKey });
};

export interface ContactData {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
}

export const createHubSpotContact = async (
  contactData: ContactData,
  calculationResult: CalculationResult
) => {
  try {
    const client = getHubSpotClient();
    const properties = {
      email: contactData.email,
      firstname: contactData.firstName,
      lastname: contactData.lastName,
      company: contactData.company || '',
      phone: contactData.phone || '',
      cargo_type: calculationResult.cargoType,
      total_volume: calculationResult.totals.totalVolume.toString(),
      total_weight: calculationResult.totals.totalChargeableWeight.toString(),
      calculation_date: new Date().toISOString(),
    };

    const response = await client.crm.contacts.basicApi.create({ properties });
    return response;
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    // Return a more user-friendly error
    throw new Error('No se pudo crear el contacto. Por favor, intente nuevamente.');
  }
};