package com.example.blog_app_expo.domain


import com.example.blog_app_expo.data.model.Post

interface HomeScreenRepo {
    suspend fun getLatestPosts(): List<Post>
    suspend fun addPost(post: Post)
}