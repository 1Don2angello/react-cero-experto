import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const NotificationSimulator = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const sendNotification = () => {
    const simulatedNotification = {
      title: 'Recordatorio',
      body: 'Recuerda revisar tus tareas.',
    };

    setNotification(`📢 ${simulatedNotification.title}: ${simulatedNotification.body}`);
  };

  return (
    <View style={styles.container}>
      <Button title=" Notificación" onPress={sendNotification} />
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
