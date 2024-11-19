import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchSchedules, addSchedule } from '../services/database'; // Para manejar la base de datos
import { logInfo, logError } from '../utils/logger';

const ScheduleValidator = ({ schedule, setSchedule }: any) => {
  const handleAddSchedule = async () => {
    try {
      const newSchedule = { start: '14:00', end: '15:30' };
      await addSchedule('2024-11-15', 'nueva_materia', newSchedule); // Fecha y materia son personalizables
      logInfo('Horario agregado', { date: '2024-11-15', subject: 'nueva_materia', newSchedule });
      
      // Refrescar los horarios después de agregar uno nuevo
      const updatedSchedules = await fetchSchedules('2024-11-15');
      setSchedule(updatedSchedules);
    } catch (error) {
      logError('Error al agregar horario', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios para el 2024-11-15</Text>
      {schedule.map((sched: any, index: number) => (
        <Text key={index} style={styles.schedule}>
          {sched.subject}: {sched.start} - {sched.end}
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
