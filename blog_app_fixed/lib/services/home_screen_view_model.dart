import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:logger/logger.dart';
import '../models/post.dart';

class HomeScreenViewModel with ChangeNotifier {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  final Logger _logger = Logger(); // Instancia de Logger

  List<Post> posts = [];
  bool isLoading = false;

  Future<void> fetchPosts() async {
    isLoading = true;
    notifyListeners();
    try {
      final querySnapshot = await _firestore.collection('posts').get();
      posts = querySnapshot.docs.map((doc) => Post.fromMap(doc.data())).toList();
      _logger.i('Posts fetched successfully'); // Logging informativo
    } catch (e) {
      _logger.e('Error fetching posts', e); // Logging de errores
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  Future<void> addPost(Post post) async {
    try {
      await _firestore.collection('posts').add(post.toMap());
      _logger.i('Post added successfully'); // Logging informativo
    } catch (e) {
      _logger.e('Error adding post', e); // Logging de errores
    }
  }

  Future<void> updatePost(String id, Post post) async {
    try {
      await _firestore.collection('posts').doc(id).update(post.toMap());
      _logger.i('Post updated successfully'); // Logging informativo
    } catch (e) {
      _logger.e('Error updating post', e); // Logging de errores
    }
  }

  Future<void> deletePost(String id) async {
    try {
      await _firestore.collection('posts').doc(id).delete();
      _logger.i('Post deleted successfully'); // Logging informativo
    } catch (e) {
      _logger.e('Error deleting post', e); // Logging de errores
    }
  }
}
