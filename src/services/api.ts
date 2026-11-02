import { PlanDto, RegisterTrialRequest, RegisterTrialResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';

export const FALLBACK_PLANS: PlanDto[] = [
  {
    id: 1,
    name: 'Prueba Gratuita',
    slug: 'trial',
    description: 'Prueba completa de escaneo inteligente con IA durante 6 días sin costo.',
    priceMonthly: 0,
    currency: 'ARS',
    isTrial: true,
    trialDays: 6,
    maxUsers: 3,
    maxDocuments: 150,
    maxStorageMb: 1024,
    maxAiQueriesMonthly: 100,
    includedModules: ['documents', 'ai_queries', 'users', 'roles', 'audit'],
    badgeColor: 'success',
    isDefault: false,
  },
  {
    id: 2,
    name: 'Starter',
    slug: 'starter',
    description: 'Plan inicial para estudios contables y oficinas en digitalización.',
    priceMonthly: 56250, // Calculado a partir de US$ 45 * cotización
    currency: 'ARS',
    originalPrice: 45,
    originalCurrency: 'USD',
    exchangeRate: 1250,
    isTrial: false,
    trialDays: null,
    maxUsers: 5,
    maxDocuments: 500,
    maxStorageMb: 2048,
    maxAiQueriesMonthly: 250,
    includedModules: ['documents', 'ai_queries', 'users', 'roles', 'audit'],
    badgeColor: 'info',
    isDefault: false,
  },
  {
    id: 3,
    name: 'Profesional',
    slug: 'pro',
    description: 'Plan recomendado para empresas con flujo continuo de PDFs y consultas IA.',
    priceMonthly: 148750, // Calculado a partir de US$ 119 * cotización
    currency: 'ARS',
    originalPrice: 119,
    originalCurrency: 'USD',
    exchangeRate: 1250,
    isTrial: false,
    trialDays: null,
    maxUsers: 15,
    maxDocuments: 5000,
    maxStorageMb: 10240,
    maxAiQueriesMonthly: 2000,
    includedModules: ['documents', 'ai_queries', 'users', 'roles', 'audit'],
    badgeColor: 'primary',
    isDefault: true,
  },
  {
    id: 4,
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Capacidad corporativa sin restricciones para alto volumen documental e IA intensiva.',
    priceMonthly: 373750, // Calculado a partir de US$ 299 * cotización
    currency: 'ARS',
    originalPrice: 299,
    originalCurrency: 'USD',
    exchangeRate: 1250,
    isTrial: false,
    trialDays: null,
    maxUsers: null,
    maxDocuments: null,
    maxStorageMb: null,
    maxAiQueriesMonthly: null,
    includedModules: ['documents', 'ai_queries', 'users', 'roles', 'audit'],
    badgeColor: 'warning',
    isDefault: false,
  },
];

export async function fetchPublicPlans(): Promise<PlanDto[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${API_BASE_URL}/plans/public`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data;
    }

    return FALLBACK_PLANS;
  } catch (err) {
    console.warn('[HC-Scan Web] Usando planes de contingencia (API no disponible):', err);
    return FALLBACK_PLANS;
  }
}

export async function registerTrialUser(payload: RegisterTrialRequest): Promise<RegisterTrialResponse> {
  const res = await fetch(`${API_BASE_URL}/auth/register-trial`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    const errorMsg = Array.isArray(data.message)
      ? data.message.join(', ')
      : data.message || 'Error al procesar el registro de la prueba';
    throw new Error(errorMsg);
  }

  return data;
}
