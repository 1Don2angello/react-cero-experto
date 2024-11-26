import 'package:cloud_firestore/cloud_firestore.dart';

class Post {
  final String profilePicture;
  final String profileName;
  final String postImage;
  final Timestamp postTimestamp;

  Post({
    required this.profilePicture,
    required this.profileName,
    required this.postImage,
    required this.postTimestamp,
  });

  factory Post.fromMap(Map<String, dynamic> data) {
    return Post(
      profilePicture: data['profilePicture'] ?? '',
      profileName: data['profileName'] ?? '',
      postImage: data['postImage'] ?? '',
      postTimestamp: data['postTimestamp'],
    );
  }

  // Método para convertir un objeto Post a un Map (necesario para CRUD)
  Map<String, dynamic> toMap() {
    return {
      'profilePicture': profilePicture,
      'profileName': profileName,
      'postImage': postImage,
      'postTimestamp': postTimestamp,
    };
  }
}
