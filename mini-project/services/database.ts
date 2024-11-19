import { database } from "./firebaseConfig"; // Importa la instancia correcta
import { ref, get, set, push } from "firebase/database";
import { logInfo, logError } from "../utils/logger";

export const fetchBooks = async () => {
  try {
    logInfo("Iniciando la carga de libros...");
    const booksRef = ref(database, "books"); // Cambia firebaseConfig por database
    const snapshot = await get(booksRef);
    if (snapshot.exists()) {
      const books = snapshot.val();
      logInfo("Libros cargados exitosamente", { count: Object.keys(books).length });
      return books;
    } else {
      logInfo("No se encontraron libros.");
      return {};
    }
  } catch (error) {
    logError("Error al cargar libros", error);
    throw error;
  }
};

export const addBook = async (book: { title: string; author: string }) => {
  try {
    logInfo("Agregando nuevo libro...", book);
    const booksRef = ref(database, "books"); // Cambia firebaseConfig por database
    const newBookRef = push(booksRef);
    await set(newBookRef, book);
    logInfo("Libro agregado exitosamente", { book });
  } catch (error) {
    logError("Error al agregar libro", error);
    throw error;
  }
};

export const fetchSchedules = async (date: string) => {
  try {
    logInfo("Cargando horarios para la fecha:", { date });
    const schedulesRef = ref(database, `schedules/${date}`); // Cambia firebaseConfig por database
    const snapshot = await get(schedulesRef);
    if (snapshot.exists()) {
      const schedules = snapshot.val();
      logInfo("Horarios cargados exitosamente", { date, count: Object.keys(schedules).length });
      return schedules;
    } else {
      logInfo("No se encontraron horarios para la fecha especificada.");
      return {};
    }
  } catch (error) {
    logError("Error al cargar horarios", error);
    throw error;
  }
};

export const addSchedule = async (
  date: string,
  subject: string,
  schedule: { start: string; end: string }
) => {
  try {
    logInfo("Agregando nuevo horario...", { date, subject, schedule });
    const schedulesRef = ref(database, `schedules/${date}/${subject}`); // Cambia firebaseConfig por database
    await set(schedulesRef, schedule);
    logInfo("Horario agregado exitosamente", { date, subject, schedule });
  } catch (error) {
    logError("Error al agregar horario", error);
    throw error;
  }
};
