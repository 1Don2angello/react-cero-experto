import 'package:firebase_database/firebase_database.dart';
import 'dart:developer' as developer; // Importar dart:developer para registros

// Escribir datos
Future<void> writeData() async {
  try {
    // Referencia a la base de datos
    final DatabaseReference databaseRef = FirebaseDatabase.instance.ref('posts/newPostId');

    // Establecer los datos
    await databaseRef.set({
      'title': 'New Post Title',
      'content': 'This is the content of the post.',
      'timestamp': DateTime.now().toIso8601String(),
    });

    // Usar developer.log en lugar de print
    developer.log('Data written successfully', name: 'writeData');
  } catch (error) {
    // Manejo de errores con developer.log
    developer.log('Error writing data', error: error, name: 'writeData');
  }
}

// Leer datos
Future<void> readData() async {
  try {
    // Referencia a la base de datos
    final DatabaseReference databaseRef = FirebaseDatabase.instance.ref('posts');

    // Obtener los datos
    final DataSnapshot snapshot = await databaseRef.get();

    if (snapshot.exists) {
      developer.log('Data: ${snapshot.value}', name: 'readData');
    } else {
      developer.log('No data available', name: 'readData');
    }
  } catch (error) {
    // Manejo de errores con developer.log
    developer.log('Error reading data', error: error, name: 'readData');
  }
}
