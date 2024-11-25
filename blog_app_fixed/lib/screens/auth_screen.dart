import 'package:flutter/material.dart';
import '../services/firebase_auth.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key}); // Agregar 'key' como parámetro nombrado

  @override
  AuthScreenState createState() => AuthScreenState(); // Cambiar nombre a público
}

class AuthScreenState extends State<AuthScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final FirebaseAuthService _authService = FirebaseAuthService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Firebase Auth'), // Uso de const
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0), // Uso de const
        child: Column(
          children: [
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(labelText: 'Email'), // Uso de const
            ),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(labelText: 'Password'), // Uso de const
              obscureText: true,
            ),
            ElevatedButton(
              onPressed: () async {
                final user = await _authService.registerUser(
                  _emailController.text,
                  _passwordController.text,
                );
                if (user != null) {
                  debugPrint('User registered: ${user.email}'); // Usar debugPrint en lugar de print
                }
              },
              child: const Text('Register'), // Uso de const
            ),
            ElevatedButton(
              onPressed: () async {
                final user = await _authService.signInUser(
                  _emailController.text,
                  _passwordController.text,
                );
                if (user != null) {
                  debugPrint('User signed in: ${user.email}'); // Usar debugPrint en lugar de print
                }
              },
              child: const Text('Sign In'), // Uso de const
            ),
            ElevatedButton(
              onPressed: () async {
                await _authService.signOutUser();
              },
              child: const Text('Sign Out'), // Uso de const
            ),
          ],
        ),
      ),
    );
  }
}
