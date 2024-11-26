import 'package:flutter/material.dart';

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')), // Usar const aquí
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(labelText: 'Email'), // Usar const aquí
            ),
            const TextField(
              decoration: InputDecoration(labelText: 'Password'), // Usar const aquí
              obscureText: true,
            ),
            ElevatedButton(
              onPressed: () {}, 
              child: const Text('Register'), // Usar const aquí
            ),
            ElevatedButton(
              onPressed: () {}, 
              child: const Text('Login'), // Usar const aquí
            ),
          ],
        ),
      ),
    );
  }
}
