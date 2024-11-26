import { trackApiLatency } from './metrics';

export const fetchBooks = async () => {
  const startTime = Date.now();
  try {
    const response = await fetch('https://proyecto-api-366217-default-rtdb.firebaseio.com/Database/books');
    await trackApiLatency('GET /books', startTime);
    return response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
