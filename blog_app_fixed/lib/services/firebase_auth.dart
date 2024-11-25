import 'package:firebase_auth/firebase_auth.dart';
import 'dart:developer' as developer; // Importar dart:developer para registros

class FirebaseAuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  // Registro con correo y contraseña
  Future<User?> registerUser(String email, String password) async {
    try {
      UserCredential result = await _auth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      return result.user;
    } catch (e) {
      // Usar developer.log en lugar de print
      developer.log('Error en el registro', error: e, name: 'registerUser');
      return null;
    }
  }

  // Inicio de sesión con correo y contraseña
  Future<User?> signInUser(String email, String password) async {
    try {
      UserCredential result = await _auth.signInWithEmailAndPassword(
        email: email,
        password: password,
      );
      return result.user;
    } catch (e) {
      // Usar developer.log en lugar de print
      developer.log('Error al iniciar sesión', error: e, name: 'signInUser');
      return null;
    }
  }

  // Cerrar sesión
  Future<void> signOutUser() async {
    try {
      await _auth.signOut();
    } catch (e) {
      // Usar developer.log en lugar de print
      developer.log('Error al cerrar sesión', error: e, name: 'signOutUser');
    }
  }
}
