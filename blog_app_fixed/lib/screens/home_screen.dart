import 'package:flutter/material.dart';
import '../models/post.dart';
import '../services/api_service.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key}); // Añadir parámetro 'key'

  @override
  HomeScreenState createState() => HomeScreenState();
}

class HomeScreenState extends State<HomeScreen> {
  final ApiService apiService = ApiService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Blog Posts'), // Uso de const
        centerTitle: true,
      ),
      body: FutureBuilder<List<Post>>(
        future: apiService.fetchPosts(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator()); // Uso de const
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.hasData && snapshot.data!.isEmpty) {
            return const Center(child: Text('No posts available.')); // Uso de const
          } else {
            final posts = snapshot.data!;
            return ListView.builder(
              itemCount: posts.length,
              itemBuilder: (context, index) {
                final post = posts[index];
                return ListTile(
                  title: Text(post.title),
                  subtitle: Text(post.content),
                  trailing: Text(post.timestamp.toLocal().toString()),
                );
              },
            );
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _addNewPost(),
        backgroundColor: Colors.deepOrange,
        child: const Icon(Icons.add), // Uso de const
      ),
    );
  }

  void _addNewPost() {
    showDialog(
      context: context,
      builder: (context) {
        final titleController = TextEditingController();
        final contentController = TextEditingController();

        return AlertDialog(
          title: const Text('New Post'), // Uso de const
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: titleController,
                decoration: const InputDecoration(labelText: 'Title'), // Uso de const
              ),
              TextField(
                controller: contentController,
                decoration: const InputDecoration(labelText: 'Content'), // Uso de const
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Cancel'), // Uso de const
            ),
            ElevatedButton(
              onPressed: () async {
                final title = titleController.text.trim();
                final content = contentController.text.trim();
                if (title.isNotEmpty && content.isNotEmpty) {
                  final newPost = Post(
                    id: '',
                    title: title,
                    content: content,
                    timestamp: DateTime.now(),
                  );

                  await _submitPost(newPost);
                }
              },
              child: const Text('Add'), // Uso de const
            ),
          ],
        );
      },
    );
  }

  Future<void> _submitPost(Post newPost) async {
    await apiService.addPost(newPost);

    if (mounted) {
      Navigator.pop(context);
    }
  }
}
