// Desestructuración y asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
  };
  
  // Desestructuración del objeto 'persona'
  const { nombre } = persona;
  console.log(nombre); // Debería mostrar "Tony"
  
  // Función que retorna un nuevo objeto basado en 'persona'
  const retornaPersona = ({ nombre, clave, edad }) => {
    return {
      nombreClave: clave,
      anios: edad,
      latLng: {
        lat: 14.222,
        lng: -12.122
      }
    };
  };
  
  // Llamar a la función y desestructurar el resultado
  const { nombreClave, anios, latLng } = retornaPersona(persona);
  
  // Mostrar los resultados
  console.log(nombreClave, anios); // Debería mostrar "Iroman 45"
  console.log(latLng); // Debería mostrar "{ lat: 14.222, lng: -12.122 }"
  