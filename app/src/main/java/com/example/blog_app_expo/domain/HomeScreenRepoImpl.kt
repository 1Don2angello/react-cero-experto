package com.example.blog_app_expo.domain

import com.example.blog_app_expo.data.model.Post
import com.example.blog_app_expo.data.HomeScreenDataSource

class HomeScreenRepoImpl(private val dataSource: HomeScreenDataSource) : HomeScreenRepo {
    override suspend fun getLatestPosts(): List<Post> = dataSource.getLatestPosts()
    override suspend fun addPost(post: Post) = dataSource.addPost(post)
}
