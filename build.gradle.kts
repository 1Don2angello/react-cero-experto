plugins {

    id("com.android.application") version "8.1.0" apply false
    id("org.jetbrains.kotlin.android") version "1.9.10" apply false
}


buildscript {
    dependencies {
        classpath("com.google.gms:google-services:4.4.2") // Plugin de Google Services
    }
}
