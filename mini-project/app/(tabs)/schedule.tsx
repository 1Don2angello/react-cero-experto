import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { fetchSchedules, addSchedule, updateSchedule, deleteSchedule } from '../../services/database'; 
import { logInfo, logError } from '../../utils/logger';

const ScheduleScreen: React.FC = () => {
  const [schedule, setSchedule] = useState<any[]>([]); // Asegúrate de que se inicialice como un arreglo vacío
  const [newSchedule, setNewSchedule] = useState({ start: '', end: '', subject: '' });

  // Cargar los horarios desde Firebase
  useEffect(() => {
    const loadSchedules = async () => {
      try {
        const date = '2024-11-15';
        const scheduleData = await fetchSchedules(date);

        // Asegúrate de que los datos sean un arreglo, incluso si no hay horarios
        const scheduleArray = scheduleData ? Object.entries(scheduleData).map(([subject, schedule]: any) => ({
          subject,
          ...schedule,
        })) : [];

        setSchedule(scheduleArray);
      } catch (error) {
        logError('Error al cargar los horarios', error);
      }
    };

    loadSchedules();
  }, []);

  // Agregar un nuevo horario
  const handleAddSchedule = async () => {
    try {
      await addSchedule('2024-11-15', newSchedule.subject, { start: newSchedule.start, end: newSchedule.end });
      logInfo('Horario agregado', { date: '2024-11-15', subject: newSchedule.subject, newSchedule });

      // Refrescar los horarios después de agregar
      const updatedSchedules = await fetchSchedules('2024-11-15');
      setSchedule(updatedSchedules);
    } catch (error) {
      logError('Error al agregar horario', error);
    }
  };

  // Actualizar un horario
  const handleUpdateSchedule = async (subject: string) => {
    try {
      const updatedSchedule = { start: '15:00', end: '16:30' }; 
      await updateSchedule('2024-11-15', subject, updatedSchedule);
      logInfo('Horario actualizado', { date: '2024-11-15', subject, updatedSchedule });

      // Refrescar los horarios después de actualizar
      const updatedSchedules = await fetchSchedules('2024-11-15');
      setSchedule(updatedSchedules);
    } catch (error) {
      logError('Error al actualizar horario', error);
    }
  };

  // Eliminar un horario
  const handleDeleteSchedule = async (subject: string) => {
    try {
      await deleteSchedule('2024-11-15', subject);
      logInfo('Horario eliminado', { date: '2024-11-15', subject });

      // Refrescar los horarios después de eliminar
      const updatedSchedules = await fetchSchedules('2024-11-15');
      setSchedule(updatedSchedules);
    } catch (error) {
      logError('Error al eliminar horario', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestor de Horarios</Text>
      {Array.isArray(schedule) && schedule.length > 0 ? (
        schedule.map((sched, index) => (
          <View key={index} style={styles.scheduleBox}>
            <Text style={styles.scheduleText}>{sched.subject}: {sched.start} - {sched.end}</Text>
            <Button title="Actualizar" onPress={() => handleUpdateSchedule(sched.subject)} />
            <Button title="Eliminar" onPress={() => handleDeleteSchedule(sched.subject)} />
          </View>
        ))
      ) : (
        <Text>No hay horarios disponibles.</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Materia"
        value={newSchedule.subject}
        onChangeText={(text) => setNewSchedule({ ...newSchedule, subject: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Inicio"
        value={newSchedule.start}
        onChangeText={(text) => setNewSchedule({ ...newSchedule, start: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Fin"
        value={newSchedule.end}
        onChangeText={(text) => setNewSchedule({ ...newSchedule, end: text })}
      />
      <Button title="Agregar Nuevo Horario" onPress={handleAddSchedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  scheduleBox: { marginBottom: 10, padding: 10, backgroundColor: '#e2e2e2', borderRadius: 5 },
  scheduleText: { fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default ScheduleScreen;
