export interface PlanDto {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  priceMonthly: number; // Siempre en PESOS (ARS) redondeado para arriba
  currency: 'ARS';
  originalPrice?: number;
  originalCurrency?: 'ARS' | 'USD';
  exchangeRate?: number;
  isTrial?: boolean;
  trialDays?: number | null;
  maxUsers: number | null;
  maxDocuments: number | null;
  maxStorageMb: number | null;
  maxAiQueriesMonthly: number | null;
  includedModules: string[];
  badgeColor: string;
  isDefault: boolean;
}

export interface RegisterTrialRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  password: string;
  planId?: number;
}

export interface RegisterTrialResponse {
  message: string;
  accessToken: string;
  trialEndsAt: string;
  trialDaysRemaining: number;
  user: {
    id: number;
    name: string;
    lastName: string;
    email: string;
    username: string;
    phone: string;
    companyId: number;
    role: string;
  };
  company: {
    id: number;
    name: string;
    slug: string;
    status: string;
    trialEndsAt: string;
    plan: {
      id: number;
      name: string;
      slug: string;
      isTrial: boolean;
    } | null;
  };
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  scannersCount: string;
  message: string;
}
