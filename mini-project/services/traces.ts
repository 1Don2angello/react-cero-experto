import perf from '@react-native-firebase/perf';

export const startTrace = async (traceName: string) => {
  try {
    const trace = await perf().newTrace(traceName);
    await trace.start();
    console.log(`[TRACE] Iniciado: ${traceName}`);
    return trace;
  } catch (error) {
    console.error(`[TRACE] Error al iniciar: ${traceName}`, error);
  }
};

export const stopTrace = async (trace: any) => {
  try {
    await trace.stop();
    console.log('[TRACE] Detenido');
  } catch (error) {
    console.error('[TRACE] Error al detener la traza:', error);
  }
};

export const logTraceStep = async (trace: any, step: string) => {
  try {
    trace.putAttribute('step', step);
    console.log(`[TRACE] Paso registrado: ${step}`);
  } catch (error) {
    console.error('[TRACE] Error al registrar paso:', error);
  }
};
