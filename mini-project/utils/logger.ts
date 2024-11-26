export const logInfo = (message: string, data?: object) => {
  console.log(`[INFO] ${message}`, data || {});
};

export const logError = (message: string, error?: Error) => {
  console.error(`[ERROR] ${message}`, error || {});
};
