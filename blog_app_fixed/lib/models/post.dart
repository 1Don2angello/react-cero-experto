class Post {
  final String id;
  final String title;
  final String content;
  final DateTime timestamp;

  Post({
    required this.id,
    required this.title,
    required this.content,
    required this.timestamp,
  });

  factory Post.fromMap(String id, Map<String, dynamic> data) {
    return Post(
      id: id,
      title: data['title'] ?? '',
      content: data['content'] ?? '',
      timestamp: DateTime.parse(data['timestamp']),
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'title': title,
      'content': content,
      'timestamp': timestamp.toIso8601String(),
    };
  }
}
