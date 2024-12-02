package com.example.blog_app_expo.presentation

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.blog_app_expo.data.model.Post
import com.example.blog_app_expo.domain.HomeScreenRepo
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers

class HomeScreenViewModel(private val repo: HomeScreenRepo) : ViewModel() {

    // StateFlow para manejar la lista de posts
    private val _posts = MutableStateFlow<List<Post>>(emptyList())
    val posts: StateFlow<List<Post>> = _posts.asStateFlow()

    init {
        fetchLatestPosts() // Llama a esta función al inicializar el ViewModel
    }

    // Función para obtener los últimos posts desde el repositorio
    private fun fetchLatestPosts() {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val latestPosts = repo.getLatestPosts()
                _posts.update { latestPosts }
            } catch (e: Exception) {
                e.printStackTrace() // Manejo básico de errores
            }
        }
    }

    // Función para agregar un nuevo post y actualizar la lista
    fun addPost(post: Post) {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                repo.addPost(post)
                fetchLatestPosts() // Actualiza los posts después de agregar uno nuevo
            } catch (e: Exception) {
                e.printStackTrace() // Manejo básico de errores
            }
        }
    }
}

// Clase Factory para inicializar el ViewModel con un repositorio
class HomeScreenViewModelFactory(private val repo: HomeScreenRepo) : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        return modelClass.getConstructor(HomeScreenRepo::class.java).newInstance(repo)
    }
}
