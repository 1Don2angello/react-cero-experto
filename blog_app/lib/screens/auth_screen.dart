import 'package:flutter/material.dart';
import 'firebase_auth_service.dart';

class AuthScreen extends StatefulWidget {
  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final FirebaseAuthService _authService = FirebaseAuthService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Firebase Auth')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _emailController,
              decoration: InputDecoration(labelText: 'Email'),
            ),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password'),
              obscureText: true,
            ),
            ElevatedButton(
              onPressed: () async {
                final user = await _authService.registerUser(
                  _emailController.text,
                  _passwordController.text,
                );
                if (user != null) {
                  print('User registered: ${user.email}');
                }
              },
              child: Text('Register'),
            ),
            ElevatedButton(
              onPressed: () async {
                final user = await _authService.signInUser(
                  _emailController.text,
                  _passwordController.text,
                );
                if (user != null) {
                  print('User signed in: ${user.email}');
                }
              },
              child: Text('Sign In'),
            ),
            ElevatedButton(
              onPressed: () async {
                await _authService.signOutUser();
              },
              child: Text('Sign Out'),
            ),
          ],
        ),
      ),
    );
  }
}