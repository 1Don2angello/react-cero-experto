import 'package:cloud_firestore/cloud_firestore.dart';

class ApiService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<void> addPost(Map<String, dynamic> data) async {
    await _firestore.collection('posts').add(data);
  }
}
