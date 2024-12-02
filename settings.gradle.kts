pluginManagement {
    repositories {
        google() // Repositorio de Google para plugins relacionados con Android
        mavenCentral() // Repositorio central de Maven
        gradlePluginPortal() // Portal de plugins de Gradle
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS) // Garantiza que los repositorios sean manejados en este archivo
    repositories {
        google() // Repositorio para dependencias de Google y Android
        mavenCentral() // Repositorio central de Maven
    }
}

// Nombre del proyecto raíz
rootProject.name = "Blog_app_expo"

// Incluir el módulo principal
include(":app")
