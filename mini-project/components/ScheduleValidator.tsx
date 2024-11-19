import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { fetchSchedules, addSchedule } from '../services/database';
import { logInfo, logError } from '../utils/logger';

const ScheduleValidator = () => {
  const [schedules, setSchedules] = useState<{ subject: string; start: string; end: string }[]>(
    []
  );

  useEffect(() => {
    const loadSchedules = async () => {
      try {
        const date = '2024-11-15'; // Puedes hacer que esta fecha sea dinámica
        const scheduleData = await fetchSchedules(date);
        const scheduleArray = Object.entries(scheduleData).map(([subject, schedule]: any) => ({
          subject,
          ...schedule,
        }));
        setSchedules(scheduleArray);
        logInfo('Horarios cargados:', { date, count: scheduleArray.length });
      } catch (error) {
        logError('Error al cargar horarios', error);
      }
    };

    loadSchedules();
  }, []);

  const handleAddSchedule = async () => {
    try {
      const newSchedule = { start: '14:00', end: '15:30' };
      await addSchedule('2024-11-15', 'nueva_materia', newSchedule);
      logInfo('Horario agregado:', { date: '2024-11-15', subject: 'nueva_materia', newSchedule });
    } catch (error) {
      logError('Error al agregar horario', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios para el 2024-11-15</Text>
      {schedules.map((schedule, index) => (
        <Text key={index} style={styles.schedule}>
          {schedule.subject}: {schedule.start} - {schedule.end}
        </Text>
      ))}
      <Button title="Agregar Nuevo Horario" onPress={handleAddSchedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  schedule: { fontSize: 16, marginBottom: 5 },
});

export default ScheduleValidator;
