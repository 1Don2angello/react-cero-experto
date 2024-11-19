// Library.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookSearch from '../../components/BookSearch'; // Importando el componente de búsqueda de libros

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
      <BookSearch /> {/* Incluir el componente que gestiona la búsqueda de libros */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Library;
