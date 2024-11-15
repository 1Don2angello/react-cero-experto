import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const BookSearch = () => {
  const [search, setSearch] = useState('');
  const books = [
    { id: '1', title: 'El Quijote' },
    { id: '2', title: 'Cien Años de Soledad' },
    { id: '3', title: 'Don Juan Tenorio' },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Libros</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el título del libro"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.book}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  book: { padding: 5, fontSize: 16 },
});

export default BookSearch;
