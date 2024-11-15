import messaging from '@react-native-firebase/messaging';

const NotificationHandler = {
  requestPermission: async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  },

  getToken: async () => {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  },
};

export default NotificationHandler;
