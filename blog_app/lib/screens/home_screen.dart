import 'package:flutter/material.dart';
import '../models/post.dart';
import '../services/api_service.dart';

class HomeScreen extends StatefulWidget {
  @override
  HomeScreenState createState() => HomeScreenState();
}

class HomeScreenState extends State<HomeScreen> {
  final ApiService apiService = ApiService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Blog Posts'),
        centerTitle: true,
      ),
      body: FutureBuilder<List<Post>>(
        future: apiService.fetchPosts(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.hasData && snapshot.data!.isEmpty) {
            return Center(child: Text('No posts available.'));
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
        child: Icon(Icons.add),
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
          title: Text('New Post'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: titleController,
                decoration: InputDecoration(labelText: 'Title'),
              ),
              TextField(
                controller: contentController,
                decoration: InputDecoration(labelText: 'Content'),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('Cancel'),
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

                  // Ejecuta la operación asíncrona sin usar el BuildContext directamente
                  await _submitPost(newPost);
                }
              },
              child: Text('Add'),
            ),
          ],
        );
      },
    );
  }

  Future<void> _submitPost(Post newPost) async {
    await apiService.addPost(newPost);

    // Verifica si el widget aún está montado antes de cerrar el diálogo
    if (mounted) {
      Navigator.pop(context);
    }
  }
}
