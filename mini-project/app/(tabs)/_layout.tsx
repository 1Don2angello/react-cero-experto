import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="(tabs)/schedule" options={{ title: 'Horarios' }} />
      <Tabs.Screen name="(tabs)/library" options={{ title: 'Biblioteca' }} />
      <Tabs.Screen
        name="(tabs)/notifications"
        options={{ title: 'Notificaciones' }}
      />
    </Tabs>
  );
}
