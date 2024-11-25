import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart'; // Para autenticación
import 'package:firebase_database/firebase_database.dart'; // Para Realtime Database
import 'package:cloud_firestore/cloud_firestore.dart'; // Para Firestore
import 'package:firebase_storage/firebase_storage.dart'; // Para almacenamiento
import 'dart:developer' as developer; // Para registros

class FirebaseConfig {
  static Future<void> initializeFirebase() async {
    try {
      // Inicializar Firebase
      await Firebase.initializeApp();

      // Registro usando developer.log
      developer.log('Firebase initialized successfully', name: 'FirebaseConfig');
    } catch (e) {
      // Manejo de errores
      developer.log('Error initializing Firebase', error: e, name: 'FirebaseConfig');
    }
  }

  // Acceso a los servicios de Firebase
  static FirebaseAuth get auth => FirebaseAuth.instance; // Autenticación
  static FirebaseDatabase get database => FirebaseDatabase.instance; // Realtime Database
  static FirebaseFirestore get firestore => FirebaseFirestore.instance; // Firestore
  static FirebaseStorage get storage => FirebaseStorage.instance; // Almacenamiento
}
