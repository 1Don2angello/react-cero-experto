import 'package:firebase_database/firebase_database.dart';
import '../models/post.dart';

class ApiService {
  final DatabaseReference _db = FirebaseDatabase.instance.ref();

  Future<List<Post>> fetchPosts() async {
    final snapshot = await _db.child('posts').get();
    if (snapshot.exists) {
      final data = Map<String, dynamic>.from(snapshot.value as Map);
      return data.entries
          .map((entry) => Post.fromMap(entry.key, Map<String, dynamic>.from(entry.value)))
          .toList();
    }
    return [];
  }

  Future<void> addPost(Post post) async {
    final newPostRef = _db.child('posts').push();
    await newPostRef.set(post.toMap());
  }
}
