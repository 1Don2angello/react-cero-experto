package com.example.blog_app_expo.views

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.rememberCoroutineScope
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.blog_app_expo.data.model.Post
import com.example.blog_app_expo.domain.HomeScreenRepoImpl
import com.example.blog_app_expo.presentation.HomeScreenViewModel
import com.example.blog_app_expo.presentation.HomeScreenViewModelFactory
import kotlinx.coroutines.launch
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.blog_app_expo.data.HomeScreenDataSource

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(navController: NavHostController) {
    val viewModel: HomeScreenViewModel = viewModel(
        factory = HomeScreenViewModelFactory(
            HomeScreenRepoImpl(HomeScreenDataSource())
        )
    )
    val posts = viewModel.posts.collectAsState() // Cambiar a viewModel.posts
    val coroutineScope = rememberCoroutineScope()

    Scaffold(
        topBar = { TopAppBar(title = { Text("Blog App") }) }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp)
        ) {
            posts.value.forEach { post ->
                Text(text = post.postContent)
            }
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = {
                coroutineScope.launch {
                    viewModel.addPost(
                        Post(
                            profileName = "John Doe",
                            postContent = "Hello Firebase!"
                        )
                    )
                }
            }) {
                Text("Agregar Post")
            }
        }
    }
}

