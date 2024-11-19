import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationHandler = () => {
  useEffect(() => {
    // Solicita permisos para las notificaciones
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Se necesitan permisos para mostrar notificaciones.');
      }
    };

    requestPermissions();
  }, []);

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Recordatorio',
        body: 'Recuerda revisar tus tareas.',
      },
      trigger: {
        seconds: 5, // Tiempo en segundos
        repeats: false, // Define si se repite o no
      } as Notifications.TimeIntervalTriggerInput, // Asegura el tipo explícito
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Enviar Recordatorio" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default NotificationHandler;
