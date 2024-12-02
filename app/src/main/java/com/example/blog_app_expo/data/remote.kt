package com.example.blog_app_expo.data

import com.example.blog_app_expo.data.model.Post
import com.google.firebase.firestore.FirebaseFirestore
import kotlinx.coroutines.tasks.await

class HomeScreenDataSource {
    private val firestore = FirebaseFirestore.getInstance()
    private val postsCollection = firestore.collection("posts")

    suspend fun getLatestPosts(): List<Post> {
        val querySnapshot = postsCollection.get().await()
        return querySnapshot.documents.mapNotNull { it.toObject(Post::class.java) }
    }

    suspend fun addPost(post: Post) {
        postsCollection.add(post).await()
    }
}
