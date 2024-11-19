import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Button } from 'react-native';
import { fetchBooks, addBook } from '../services/database';
import { logInfo, logError } from '../utils/logger';

const BookSearch = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<{ id: string; title: string; author: string }[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const booksData = await fetchBooks();
        const booksArray = Object.entries(booksData).map(([id, book]: any) => ({
          id,
          ...book,
        }));
        setBooks(booksArray);
      } catch (error) {
        logError('Error al cargar libros', error);
      }
    };

    loadBooks();
  }, []);

  const handleAddBook = async () => {
    try {
      const newBook = { title: 'Nuevo Libro', author: 'Autor Desconocido' };
      await addBook(newBook);
      logInfo('Libro agregado:', newBook);
    } catch (error) {
      logError('Error al agregar libro', error);
    }
  };

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
        renderItem={({ item }) => (
          <Text style={styles.book}>
            {item.title} - {item.author}
          </Text>
        )}
      />
      <Button title="Agregar Libro Ejemplo" onPress={handleAddBook} />
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
