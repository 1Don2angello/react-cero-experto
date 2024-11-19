// components/BookSearch.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { ref, get } from 'firebase/database';
import { database } from '../services/firebaseConfig'; // Asegúrate de que la ruta sea correcta

const BookSearch = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<any[]>([]); // Establecemos un estado para los libros obtenidos desde Firebase

  // Este hook se encarga de cargar los libros al montar el componente
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksRef = ref(database, 'books'); // Ruta en la base de datos
        const snapshot = await get(booksRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const booksArray = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
            author: data[key].author,
          }));
          setBooks(booksArray);
        } else {
          console.log('No se encontraron libros.');
        }
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };

    fetchBooks();
  }, []); // Ejecutar la función solo una vez cuando el componente se monte

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
