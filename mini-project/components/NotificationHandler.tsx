import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationSimulator = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const sendNotification = async () => {
    const simulatedNotification = {
      title: 'Recordatorio',
      body: 'Recuerda revisar tus tareas.',
      // Asegúrate de configurar correctamente el "trigger" con el tipo 'date'
      trigger: {
        type: 'date', // Especifica el tipo correcto para la fecha
        date: new Date(new Date().getTime() + 5000), // Configura el tiempo como 5 segundos después de ahora
      },
    };

    try {
      await Notifications.scheduleNotificationAsync(simulatedNotification);
      setNotification(`📢 ${simulatedNotification.title}: ${simulatedNotification.body}`);
    } catch (error) {
      console.error('Error al programar la notificación:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Notificación" onPress={sendNotification} />
      {notification && (
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>{notification}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  notificationBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationSimulator;
