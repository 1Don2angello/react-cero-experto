import { startTrace, stopTrace, logTraceStep } from './traces';

export const login = async (credentials: { username: string; password: string }) => {
  const trace = await startTrace('login_flow');
  try {
    logTraceStep(trace, 'start_login');
    const response = await fetch('https://api.example.com/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    logTraceStep(trace, 'server_response');

    if (response.ok) {
      logTraceStep(trace, 'login_success');
    } else {
      logTraceStep(trace, 'login_failure');
    }
  } catch (error) {
    console.error('Error during login:', error);
  } finally {
    await stopTrace(trace);
  }
};
