import { trackApiLatency } from './metrics';

export const fetchBooks = async () => {
  const startTime = Date.now();
  try {
    const response = await fetch('https://api.example.com/books');
    await trackApiLatency('GET /books', startTime);
    return response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
