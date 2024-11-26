import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/home_screen_view_model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key); // Agregado Key

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<HomeScreenViewModel>();

    return Scaffold(
      appBar: AppBar(title: const Text('Blog Posts')), // Agregado const
      body: viewModel.isLoading
          ? const Center(child: CircularProgressIndicator()) // Agregado const
          : ListView.builder(
              itemCount: viewModel.posts.length,
              itemBuilder: (context, index) {
                final post = viewModel.posts[index];
                return ListTile(
                  leading: CircleAvatar(
                    backgroundImage: NetworkImage(post.profilePicture),
                  ),
                  title: Text(post.profileName),
                  subtitle: Image.network(post.postImage),
                  trailing: Text(post.postTimestamp.toDate().toString()),
                );
              },
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.pushNamed(context, '/add_post'),
        backgroundColor: Colors.deepOrange,
        child: const Icon(Icons.add), // Agregado const
      ),
    );
  }
}
