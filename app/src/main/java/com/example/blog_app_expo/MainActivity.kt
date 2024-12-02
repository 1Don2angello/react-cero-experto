package com.example.blog_app_expo.views

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.blog_app_expo.ui.theme.Blog_app_expoTheme
import com.example.blog_app_expo.views.AppNavigation

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Blog_app_expoTheme {
                AppNavigation() // Llamamos a la navegación de la app
            }
        }
    }
}
