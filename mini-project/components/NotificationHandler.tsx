import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationSimulator = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const sendNotification = async () => {
    const simulatedNotification = {
      content: {
        title: 'Recordatorio',
        body: 'Recuerda revisar tus tareas.',
      },
      trigger: {
        type: Notifications.NotificationTriggerInputType.DATE,  // Especificamos el tipo correcto
        date: new Date(new Date().getTime() + 5000), // Configura el tiempo como 5 segundos después de ahora
      },
    };

    try {
      // Programar la notificación con el objeto adecuado
      await Notifications.scheduleNotificationAsync(simulatedNotification);
      setNotification(`📢 ${simulatedNotification.content.title}: ${simulatedNotification.content.body}`);
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
