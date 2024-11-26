import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="library" options={{ title: 'Biblioteca' }} />
      <Tabs.Screen name="notifications" options={{ title: 'Notificaciones' }} />
      <Tabs.Screen name="schedule" options={{ title: 'Horarios' }} />
    </Tabs>
  );
}
