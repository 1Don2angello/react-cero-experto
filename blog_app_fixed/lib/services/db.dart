import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/post.dart';

class FirestoreService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<void> addPost(Post post) async {
    await _firestore.collection('posts').add(post.toMap());
  }

  Future<List<Post>> fetchPosts() async {
    final querySnapshot = await _firestore.collection('posts').get();
    return querySnapshot.docs.map((doc) => Post.fromMap(doc.data())).toList();
  }

  Future<void> updatePost(String id, Post post) async {
    await _firestore.collection('posts').doc(id).update(post.toMap());
  }

  Future<void> deletePost(String id) async {
    await _firestore.collection('posts').doc(id).delete();
  }
}
