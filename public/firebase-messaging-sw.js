importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBDvGtP2Bhxir1qWVyzqtBk5_tS12fA0Ps",
  authDomain: "fong-ab522.firebaseapp.com",
  projectId: "fong-ab522",
  storageBucket: "fong-ab522.firebasestorage.app",
  messagingSenderId: "287370467762",
  appId: "1:287370467762:web:3ce5a8716501eda336ecab",
  measurementId: "G-GVDKDN7YPC"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || "ជូនដំណឹងពី Lộc Trời";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
