package com.example.blog_app_expo.data.model
import com.google.firebase.Timestamp

data class Post(
    val id: String = "",
    val profilePicture: String = "",
    val profileName: String = "",
    val postTimestamp: java.security.Timestamp? = null,
    val postImage: String = "",
    val postContent: String = ""
)
