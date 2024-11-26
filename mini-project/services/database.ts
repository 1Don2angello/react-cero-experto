import { database } from "./firebaseConfig"; // Importa la instancia correcta
import { ref, get, set, update, remove } from 'firebase/database';
import { logInfo, logError } from '../utils/logger';

export const fetchSchedules = async (date: string) => {
  try {
    const schedulesRef = ref(database, `schedules/${date}`);
    const snapshot = await get(schedulesRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return {};
  } catch (error) {
    logError('Error al obtener horarios', error);
    throw error;
  }
};

export const addSchedule = async (date: string, subject: string, schedule: { start: string; end: string }) => {
  try {
    const schedulesRef = ref(database, `schedules/${date}/${subject}`);
    await set(schedulesRef, schedule);
    logInfo('Horario agregado', { date, subject, schedule });
  } catch (error) {
    logError('Error al agregar horario', error);
    throw error;
  }
};

export const updateSchedule = async (date: string, subject: string, schedule: { start: string; end: string }) => {
  try {
    const schedulesRef = ref(database, `schedules/${date}/${subject}`);
    await update(schedulesRef, schedule);
    logInfo('Horario actualizado', { date, subject, schedule });
  } catch (error) {
    logError('Error al actualizar horario', error);
    throw error;
  }
};

export const deleteSchedule = async (date: string, subject: string) => {
  try {
    const schedulesRef = ref(database, `schedules/${date}/${subject}`);
    await remove(schedulesRef);
    logInfo('Horario eliminado', { date, subject });
  } catch (error) {
    logError('Error al eliminar horario', error);
    throw error;
  }
};
