import 'package:firebase_auth/firebase_auth.dart';

Future<void> registerUser(String email, String password) async {
  try {
    // Instancia de FirebaseAuth
    final FirebaseAuth auth = FirebaseAuth.instance;

    // Crear un usuario con email y contraseña
    UserCredential userCredential = await auth.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );

    // Imprimir la información del usuario registrado
    print('User registered: ${userCredential.user}');
  } catch (error) {
    // Manejo de errores
    print('Error registering user: $error');
  }
}
