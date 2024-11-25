import 'package:firebase_auth/firebase_auth.dart';
import 'dart:developer' as developer; // Importar el paquete de logging

Future<void> registerUser(String email, String password) async {
  try {
    // Instancia de FirebaseAuth
    final FirebaseAuth auth = FirebaseAuth.instance;

    // Crear un usuario con email y contraseña
    UserCredential userCredential = await auth.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );

    // Usar developer.log en lugar de print
    developer.log('User registered: ${userCredential.user}');
  } catch (error) {
    // Manejo de errores
    developer.log('Error registering user', error: error);
  }
}
