import React from 'react';
import { View, Text } from 'react-native'; // Asegúrate de agregar esta importación
import NotificationHandler from '../../components/NotificationHandler';

const NotificationsScreen: React.FC = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        Notificaciones
      </Text>
      <NotificationHandler />
    </View>
  );
};

export default NotificationsScreen;
