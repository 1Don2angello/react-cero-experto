import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart'; // Para autenticación
import 'package:firebase_database/firebase_database.dart'; // Para Realtime Database
import 'package:cloud_firestore/cloud_firestore.dart'; // Para Firestore
import 'package:firebase_storage/firebase_storage.dart'; // Para almacenamiento

class FirebaseConfig {
  static Future<void> initializeFirebase() async {
    // Inicializar Firebase
    await Firebase.initializeApp();

    // Imprimir un mensaje para confirmar la inicialización
    print('Firebase initialized successfully');
  }

  // Acceso a los servicios de Firebase
  static FirebaseAuth get auth => FirebaseAuth.instance; // Autenticación
  static FirebaseDatabase get database => FirebaseDatabase.instance; // Realtime Database
  static FirebaseFirestore get firestore => FirebaseFirestore.instance; // Firestore
  static FirebaseStorage get storage => FirebaseStorage.instance; // Almacenamiento
}
