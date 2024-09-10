const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55555,
        lat:14.32222,
        lng: 34.9222
    }
  }
  
  console.log (persona);
  
  const persona2 = {...persona};
  persona2.nombre= 'peter';
  console.log(persona2);
  
  