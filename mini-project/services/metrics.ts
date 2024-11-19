import { logEvent } from 'expo-firebase-analytics';

export const trackEvent = async (eventName: string, params?: object) => {
  try {
    await logEvent(eventName, params);
    console.log(`[METRIC] Evento registrado: ${eventName}`, params || {});
  } catch (error) {
    console.error('Error registrando métrica:', error);
  }
};

export const trackApiLatency = async (endpoint: string, startTime: number) => {
  const latency = Date.now() - startTime;
  console.log(`[METRIC] Latencia API (${endpoint}): ${latency} ms`);
  await trackEvent('api_latency', { endpoint, latency });
};
