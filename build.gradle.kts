// build.gradle.kts (Nivel de Proyecto)
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
}

buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.google.gms:google-services:4.4.2") // Plugin de Google Services
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
