import 'package:firebase_database/firebase_database.dart';

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

    print('Data written successfully');
  } catch (error) {
    print('Error writing data: $error');
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
      print('Data: ${snapshot.value}');
    } else {
      print('No data available');
    }
  } catch (error) {
    print('Error reading data: $error');
  }
}
