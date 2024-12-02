package com.example.blog_app_expo.views

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun AppNavigation() {
    // Crear un controlador de navegación
    val navController: NavHostController = rememberNavController()

    // Configurar el NavHost
    NavHost(navController = navController, startDestination = "home") {
        // Ruta inicial (pantalla de inicio)
        composable("home") {
            HomeScreen(navController)
        }
        // Puedes agregar más rutas aquí
    }
}
